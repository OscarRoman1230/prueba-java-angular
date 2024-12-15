package org.example.clientapi.service;

import org.example.clientapi.entity.Client;
import org.example.clientapi.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public Client getClientDocumentTypeAndNumber(String documentType, String documentNumber) {
        return clientRepository.findByDocumentTypeAndNumber(documentType, documentNumber);
    }
}
