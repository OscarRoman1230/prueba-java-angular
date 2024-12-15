package org.example.clientapi.repository;


import org.example.clientapi.entity.Client;
import org.springframework.stereotype.Repository;

@Repository
public class ClientRepository {
    public Client findByDocumentTypeAndNumber(String type, String number) {
        if (type.equals("C") && number.equals("23445322")) {
            return new Client("Juan", "Carlos", "Pérez", "Gómez", "123456789", "Calle 123", "Bogotá");
        }
        return null; // Simula no encontrado
    }
}
