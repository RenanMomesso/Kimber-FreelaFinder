import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react-native';
import JobCard from '../JobCard';
import { CardJobMock } from '../../constants/MockData';
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from '../../navigations/MainStackNavigator';

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('JobCard render', () => {
    it('should not render the whole component if title is null or undefined', () => {
        const { container, debug } = render(<JobCard item={CardJobMock[0]} />)
        debug()
        expect(container.children).toEqual([])
    })

    it('should render JobCard correctly', () => {
        const { getByTestId } = render(<JobCard item={CardJobMock[1]} />)

        expect(getByTestId('job-card-wrapper')).toBeDefined()
    })

    it('should render apply button correctly', () => {
        const { getByText } = render(<JobCard item={CardJobMock[1]} />)
        expect(getByText('Apply')).toBeDefined()
    })

    it('should render the date if horizontal is true', () => {
        const { getByText } = render(<JobCard item={CardJobMock[1]} horizontal />)
        expect(getByText('01/01/2020')).toBeDefined()
    })

    it('should not render the date if horizontal is false', () => {
        const { queryByText } = render(<JobCard item={CardJobMock[1]} />)
        expect(queryByText('01/01/2020')).toBeNull()
    })

    it('should render the urgent text if urgent is true', () => {
        const { getByText } = render(<JobCard item={CardJobMock[1]} />)
        expect(getByText('urgent!')).toBeDefined()
    })

    it('should not render the urgent text if urgent is false', () => {
        const { queryByText } = render(<JobCard item={CardJobMock[0]} />)
        expect(queryByText('urgent!')).toBeNull()

    })

    it('should change screen when click apply button', () => {

        render(<JobCard item={CardJobMock[1]} />)
        const toClick = screen.findByText('Apply')
        expect(toClick).toBeDefined()
    })

    it('should have 3 children elements inside wrapper', () => {
        render(<JobCard item={CardJobMock[1]} />)

        const wrapper = screen.getByTestId('job-card-wrapper')
        expect(wrapper.children.length).toEqual(3)
    })

    it('should have 3 children elements inside card header', () => {
        render(<JobCard item={CardJobMock[1]} />)
        const wrapper = screen.getByTestId('card-header')
        // console.log("WRAPPER", wrapper.children[0].children)
        expect(wrapper.children.length).toEqual(3)
    })




})