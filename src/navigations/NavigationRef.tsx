import {
    createNavigationContainerRef,
    StackActions,
} from '@react-navigation/native';
import { BottomNavigationProps, JobCardNavigationProps, RootNavigationProps } from './types';

export type navigationPropsRef = RootNavigationProps | BottomNavigationProps | JobCardNavigationProps

export const navigationRef = createNavigationContainerRef<JobCardNavigationProps>();


export function navigate(name: any, params: any) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export function push(...args: any) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push({ ...args }));
    }
}