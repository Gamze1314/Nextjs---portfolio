"use client" // this directive indicates this file is treated as client side code.

// defines a Provider component that sets up color mode context.

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"


// Chakra UI components will have access to the theme and other global configurations.
// ColorModeProvider => supports light and dark mode.

// imported in app layout module.

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
