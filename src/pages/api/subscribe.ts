import { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_DOC_ID as string)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query
  if (!email) {
    res.status(400).json({ error: { message: 'Email is required' } })
    return
  }
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SHEETS_EMAIL as string,
      private_key: process.env.GOOGLE_SHEETS_KEY?.replace(
        /\\n/g,
        '\n'
      ) as string
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    await sheet.addRow({
      Email: email.toString(),
      Date: new Date().toDateString()
    })
    res.status(200).json({ message: 'Ok' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: { message: 'There has been an error' } })
  }
}
