import React, { ReactElement } from 'react';
import { View, ViewProps } from 'react-native';

export interface ILayoutProps extends ViewProps {
    children: React.ReactNode
    theme?: 'dark' | 'light'
    style?: ViewProps['style']
}

const Layout: React.FC<ILayoutProps> = ({ children, theme = 'light', style, ...props }): ReactElement => {
    return <View {...props} style={{ backgroundColor: theme === 'light' ? '#FFF' : '#000', flex: 1, ...style }}>
        {children}
    </View>
}

export default Layout;