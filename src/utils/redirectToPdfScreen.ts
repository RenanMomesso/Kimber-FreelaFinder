import { navigationRef } from "../navigations/NavigationRef"

export const redirectToPdfScreen = (pdf: string) => {
    navigationRef.navigate('PdfFullsizeScreen', {
        source: pdf,
        onCancel: () => navigationRef.goBack(),
        onDownload: () => { }
    })
}