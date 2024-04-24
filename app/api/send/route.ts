
import { ContactEmailTemplate } from '@/components/shared/emails/ContactEmailTemplate';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import {Resend} from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {  
  try {
    const { nombre, email, comentario } = await request.json();
    console.log("nombre",nombre);
    console.log("email",email);
    console.log("comentario",comentario);

    const data = await resend.emails.send({
      from: 'Formulario de contacto - refugiodellobo.com <onboarding@resend.dev>',
      to: ['info@refugiodellobo.com'],
      subject: 'Mensaje desde Formulario de Contacto - refugiodellobo.com',
      react: ContactEmailTemplate({ nombre: `${nombre}`, email:`${email}`, comentario:`${comentario}` }),
      text:'Hello from NextJs'
    })
    return NextResponse.json({message: "Email Sent"}, {
      status:200
    })
  } catch (error) {
    return NextResponse.json({message: "Error POST"}, {
      status:500
    })
  }
}

