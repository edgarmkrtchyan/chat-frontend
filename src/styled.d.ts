import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      chatHeaderColor: string,
      resetSetttingsButtonBackgroundColor: string,
      sendButtonBackgroundColor: string,
      chatMessagesBackground: string,
      settingsAreaBackground: string,
      textInputBackgroundColor: string
      textInputTextColor: string,
      textInputBorderTopColor: string,
      textInputBorderRightColor: string,
      labelColor: string,
    }
  }
}