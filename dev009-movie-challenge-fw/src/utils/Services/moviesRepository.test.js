import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as moviesRepository from './moviesRepository';

// Configurar un mock global para fetch
global.fetch = jest.fn();

describe('MovieFilter', () => {
  // Configurar un mock para la función getGenre
  const mockGetGenre = jest.spyOn(moviesRepository, 'getGenre');

  beforeEach(() => {
    // Restablecer el estado de los mocks antes de cada prueba
    jest.resetAllMocks();
  });

  it('should display the filter options', async () => {
    // Simular una respuesta exitosa de getGenre
    mockGetGenre.mockResolvedValue({ genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Drama' }] });
  });
// Prueba para simular una respuesta exitosa de getOne
it('should simulate a successful getOne call', async () => {
  // Simular una respuesta exitosa de getOne
  const mockResponse = { /* Datos simulados de la película */ };
  global.fetch.mockResolvedValue({ json: () => mockResponse });

  // Llamar a la función getOne y verificar su comportamiento
  const movieId = 123; // Reemplaza con el ID de la película que deseas simular
  const movieData = await moviesRepository.getOne(movieId);

  // Verificar que la función getOne devuelva los datos simulados
  expect(movieData).toEqual(mockResponse);
});
})