import { NextRequest, NextResponse } from 'next/server'
import { jsPDF } from 'jspdf'

// Supported encodings (order matters, first successful one will be used)
const ENCODINGS = ['utf-8', 'iso-8859-1', 'cp1252', 'ascii']

function readTextFile(buffer: Buffer): string {
  for (const encoding of ENCODINGS) {
    try {
      return buffer.toString(encoding as BufferEncoding)
    } catch {
      continue
    }
  }
  // Fallback: replace undecodable bytes
  return buffer.toString('utf8').replace(/\uFFFD/g, '')
}

function cleanText(text: string): string {
  // Remove ANSI escape sequences
  text = text.replace(/\x1B[@-_][0-?]*[ -/]*[@-~]/g, '')
  // Remove other non-printable chars (except \n, \t, \r)
  text = text.replace(/[^\x20-\x7E\n\t\r]+/g, '')
  return text.trim()
}

function convertToPdf(text: string): Buffer {
  const pdf = new jsPDF()
  pdf.setFont('courier')
  pdf.setFontSize(8)
  
  const lines = text.split('\n')
  let y = 20
  const pageHeight = 280
  const lineHeight = 5
  
  for (const line of lines) {
    if (y > pageHeight) {
      pdf.addPage()
      y = 20
    }
    
    const processedLine = line.length > 80 ? line.substring(0, 77) + '...' : line
    pdf.text(processedLine, 10, y)
    y += lineHeight
  }
  
  return Buffer.from(pdf.output('arraybuffer'))
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
    const text = readTextFile(buffer)
    const cleaned = cleanText(text)
    const pdfBuffer = convertToPdf(cleaned)

    const baseName = file.name.replace(/\.[^.]+$/, '')
    
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${baseName}.pdf"`,
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    console.error('Conversion error:', error)
    return NextResponse.json(
      { error: 'Conversion failed' },
      { status: 500 }
    )
  }
}
