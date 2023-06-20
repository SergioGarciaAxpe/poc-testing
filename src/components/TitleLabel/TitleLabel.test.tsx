import { render } from "@testing-library/react"
import '@testing-library/jest-dom';
import { TitleLabel } from "./TitleLabel"

describe('Testing <TitleLabel />', () => {
    test('Render <TitleLabel />', () => {
        const title = 'Hola Mundo';
        const subtitle = 'Mi nombre es Sergio';
        const { asFragment, getByText } = render(<TitleLabel title={title} subtitle={subtitle} />);
        expect(getByText('Hola Mundo')).toBeInTheDocument()
        expect(getByText('Mi nombre es Sergio')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot(`
            <div>
                <h1>Hola Mundo</h1>
                <h3>Mi nombre es Sergio</h3>
            </div>
        `)
    })
})