import React from 'react'
import { NativeBaseProvider } from 'native-base'

function KanchanNativeUIProvider(props) {
    const { children, ...restProps } = props;
    return (
        <NativeBaseProvider {...restProps}>
            {children}
        </NativeBaseProvider>
    )
}

export { KanchanNativeUIProvider }