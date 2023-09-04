import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth";
import {PrivateRoute} from "../../src/router/PrivateRoute";
import {MemoryRouter} from "react-router-dom";

describe('Pruebas en el <PrivateRoute />', () => {
    test('debe de mostrar el children si esta autenticado', () =>{

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Luis',
            }
        }
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/dc']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/dc");
    });
});