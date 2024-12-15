package org.example.clientapi.controllers;

import org.example.clientapi.entity.Client;
import org.example.clientapi.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    public ResponseEntity<?> getClient(
            @RequestParam String documentType,
            @RequestParam String documentNumber) {

        if (!documentType.equals("C") && !documentType.equals("P")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Tipo de documento no válido");
        }

        Client client = clientService.getClientDocumentTypeAndNumber(documentType, documentNumber);

        if (client == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente no encontrado");
        }

        return ResponseEntity.ok(client);
    }
}
