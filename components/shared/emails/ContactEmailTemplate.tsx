import * as React from "react"

import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface EmailTemplateProps {
  nombre: string
  email: string
  comentario: string
}

export const ContactEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  email,
  comentario,
}) => (
  <Html>
    {/* <Head className="font-medium">
      Nuevo mensaje desde el formulario de contacto:
    </Head> */}
    {/* <Preview className="font-medium">Nuevo mensaje desde el formulario de contacto:</Preview> */}
    <Tailwind>
      <Body className="bg-slate-100 border rounded-md p-8 drop-shadow-md">
        <Container>
          <Section>
            {/* <Heading>
            Recibiste un mensaje desde el formulario de contacto del sitio web
          </Heading> */}
            <h1>Recibiste un mensaje desde el formulario de contacto</h1>
            <Text className="text-xl font-semibold">Comentario</Text>
            <Text>{comentario}</Text>
            <Hr />
            <Text className="text-xl font-semibold">Nombre</Text>
            <Text>{nombre}</Text>
            <Text className="text-xl font-semibold">Email</Text>
            <Text>{email}</Text>
            <Hr />
            <div className="flex justify-end">
              <Text>www.refugiodellobo.com - © Copyright 2024. All Rights Reserved.</Text>
            </div>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
  // <div>
  //   <h1>Mensaje desde formulario de contacto</h1>
  //   <hr />
  //   <p>
  //     <span className="font-medium">Nombre: </span>
  //     {nombre}
  //   </p>
  //   <p>
  //     <span className="font-medium">Email: </span>
  //     {email}
  //   </p>
  //   <p>
  //     <span className="font-medium">Comentario: </span>
  //     {comentario}
  //   </p>
  // <button className="bg-sky-500 px-3 py-2">
  //   <a href="https://refugio-del-lobo.github.io/rdl-website/">
  //     Ir a refugiodellobo.com
  //   </a>
  // </button>
  // </div>
)
