import { navigationRef } from "../navigations/NavigationRef";

export const onPressImage = (image: string, imageSpecs: any) => {
    // setVisible(false)
    setTimeout(() => {
        navigationRef.navigate('FullImageScreen', {
            image,
            imageSpecs
        })
    }, 10);

}