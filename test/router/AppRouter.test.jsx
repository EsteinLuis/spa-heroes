import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth";
import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../src/router/AppRouter";

describe('Pruebas en el <AppRouter />', () => {
    test('debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect( screen.getByRole('button')).toBeTruthy();
    });

    test('debe de mostrar el componente de Marvel si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Luis',
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Marvel Comics').length).toBeGreaterThanOrEqual(1);
    });
});