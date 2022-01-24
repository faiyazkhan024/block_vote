# Block Vote

**Proof-of-Concept E-Voting System Built On Hyperledger Fabric**.

Block Vote demonstrate the implementation of the blockchain technology in the E-Voting system. It is small scale e-voting system developed as my final year project at **K.C. College of Engineering & Management Studies & Research**, Titled:

> "Exploit Secure Blockchain Based E-Voting System"

## Blockchain Business Network

The Blockchain implementation of "Block Vote" using Hyperledger Fabrics tool to develop a Business Network Archive (BNA), deployable on the latest HLF.

This BNA is deployed onto and instance of HLF and a REST API can be generated to interact with the "Block Vote" network.

## Rest Full API

It is Express server-side application that provide api. For the user to interact with the chaincode which can be deployed on any node server.

The express app is REST Full API build using node.js packages.

## Web Application

The web application is a ReactJS application having 4 interface.

- **Admin:** Administration of election (i.e. creating candidates, voters, election).
- **Voter:** Main voter dashboard which will be used by voter to cast vote to candidate.
- **Candidate:** Main candidate dashboard which help candidate to update their details.
- **Bulletin:** Public bulletin board of all vote transactions written to the fabric
