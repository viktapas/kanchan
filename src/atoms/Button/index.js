import React from "react"
import { Button, Center, NativeBaseProvider } from "native-base"

function KButton(props) {
  return (
    <NativeBaseProvider>
      <Button onPress={() => console.log("Welcome to Kanchan!")}>{props.children}</Button>
    </NativeBaseProvider>

  )
}
export { KButton as Button }
