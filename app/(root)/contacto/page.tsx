"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React, { useEffect } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Mínimo 2 caracteres.",
    })
    .max(50),
  email: z.string().email(),
  comment: z
    .string()
    .min(2, {
      message: "El comentario debe contener al menos 2 caracteres.",
    })
    .max(1500),
})

//Solo correrá si el formulario es válido

const Contacto = () => {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  })
  
  const { register, formState:{errors, isSubmitting}, setError } = form;

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {

    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log("Submited form")
      console.log(" ******** values ********", values)
      console.log(" ******** values.name ********", values.name)
      console.log(" ******** values.email ********", values.email)
      console.log(" ******** values.comment ********", values.comment)

      
      
      //ENVIAMOS EMAIL
      const contactEmail = await fetch('/api/send', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json' // Especifica que los datos son JSON
        },
        body: JSON.stringify({
          nombre: values.name,
          email: values.email,
          comentario: values.comment
        }),
      })

      //Recibimos data devuelta por la api de RESEND
      const data = await contactEmail.json()
      console.log("DATA", data);
      

      // throw new Error();
    } catch (error) {
      setError("email", {
        message: "Something is not right! check out!"
      })
      setError("comment", {
        message: "Something is not right! check out!"
      })
      setError("root", {
        message: "This is a root error. Something is not right! check out!"
      })
    }
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-contacto-bg bg-cover bg-center">
      <div className="w-full min-h-screen opacity-layer-70 hf-paddings">
        <div className="wrapper min-h-screen">
          <div className="flex justify-center">
            <div className="opacity-layer-90">
              <Card className="opacity-layer-90 max-w-lg">
                <CardHeader>
                  <CardTitle className=" drop-shadow-md">Contactanos</CardTitle>
                  <CardDescription className="text-green-600 drop-shadow-md">
                    ¡Contanos que propuesta te interesa o si tenés una nueva!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(handleSubmit)}
                      className="flex flex-col gap-4"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Nombre</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Nombre"
                                  type="text"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )
                        }}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Email"
                                  type="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Comentario</FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  placeholder="Dejanos tu mensaje!"
                                  rows={1}
                                  className="textarea-sizing"
                                />
                              </FormControl>
                              <FormMessage />
                              <p className="text-sm text-muted-foreground drop-shadow-md">
                                ¡El mensaje será recibido por nuestro equipo y
                                respondido a la brevedad!
                              </p>
                            </FormItem>
                          )
                        }}
                        />
                      <Separator className="bg-black" />
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full my-4 bg-green-600 text-xl drop-shadow-md"
                      >
                        {
                          isSubmitting ? <span className="drop-shadow-lg">Enviando...</span>  : <span className="drop-shadow-lg">Enviar</span> 
                        }
                      </Button>
                      {/* {errors.root && <div className="text-red-500">{errors.root.message}</div>} */}
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
