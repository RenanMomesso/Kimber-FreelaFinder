import { render } from '@testing-library/react-native'
import React from 'react'
import TagText, { ITagTextProps } from './index'
import TagTextStyles from './TagText.styles'

const mockProps: ITagTextProps = {
    text: 'test',
    color: 'red',
    textColor: 'white'

}

describe('it should render TagText correctly', () => {
    it("Should render title correctly", () => {
        const { getByText } = render(<TagText  {...mockProps} />)
        expect(getByText('test')).toBeDefined()
    })

    it('should render the correct style of tag', () => {
        const { getByTestId } = render(<TagText  {...mockProps} />)
        expect(getByTestId('tag-text').props.style).toEqual(TagTextStyles(mockProps.color).container)
    })

    it('should render the correct color of text and text styles', () => {
        const { getByText } = render(<TagText  {...mockProps} />)
        expect(getByText(mockProps.text).props.style).toStrictEqual({
            color: mockProps.textColor,
            fontSize: 13,
            "fontWeight": "normal",
            "fontFamily": "Poppins-Medium",
        })
    })

    it("if text is empty, should not render", () => {
        const { container } = render(<TagText text='' />)
        expect(container.children.length).toBe(0)
    })
})