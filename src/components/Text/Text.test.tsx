import React from 'react'
import { render } from '@testing-library/react-native';
import Text from '../Text'

describe('Text render', () => {
    it('should render text with fontsize 13, font Family Poppins and font weight normal', () => {
        const { getByText } = render(<Text category='h6'>Hello World</Text>)
        expect(getByText('Hello World', { exact: true }).props.style).toEqual({ fontSize: 12, fontFamily: 'Poppins-Regular', fontWeight: 'normal' })

    })
    it('Case h4', () => {
        const { getByText } = render(<Text category='h4'>Hello World</Text>)
        expect(getByText('Hello World', { exact: true })).toBeDefined()

    })
    it('should render text with text hello world', () => {
        const { getByText } = render(<Text category='h1'>Hello World</Text>)
        expect(getByText('Hello World', { exact: true })).toBeDefined()

    })
    it('should render text with text hello world', () => {
        const { getByText } = render(<Text category='h2'>Hello World</Text>)
        expect(getByText('Hello World', { exact: true })).toBeDefined()

    })
    it('should render text with text hello world', () => {
        const { getByText } = render(<Text category='h3medium'>Hello World</Text>)
        expect(getByText('Hello World', { exact: true })).toBeDefined()

    })
    it('should render text with text hello world', () => {
        const { getByText, debug } = render(<Text category='h3semibold'>Hello World</Text>)
        expect(getByText('Hello World', { exact: true }).props.style).toEqual({
            fontSize: 19, fontFamily: 'Poppins-Medium', fontWeight: 'bold'
        })

    })
    it('should render text with text hello world', () => {
        const { getByText } = render(<Text category='p'>Hello World</Text>)
        expect(getByText('Hello World', { exact: true })).toBeDefined()

    })
});