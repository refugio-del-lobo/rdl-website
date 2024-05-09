
import { Bebas_Neue, Poppins, Caveat } from "next/font/google";

const bebasNeue_init = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebasNeue',
})

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-poppins',
})
const caveat_init = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
})

export const fontBebasNeue = bebasNeue_init.variable
export const fontPoppins = poppins_init.variable
export const fontCaveat = caveat_init.variable