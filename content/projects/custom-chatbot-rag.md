---
date: 2024-09-20
category: data-ai-llms
cover_image: /images/projects/custom-chatbot-rag/chatbot-result.png
tags:
    - Langchain
    - Huggingface
    - Azure
    - ChromaDB
    - WhatsApp
---

# LLM-RAG Powered Customer Service Chatbot for Telkom
Developed a prototype WhatsApp chatbot using a Large Language Model (LLM) with Retrieval-Augmented Generation (RAG) to provide efficient and accurate customer service.

## Overview
- Role: Data Analyst / AI Programmer Intern
- Problem/Goal: This project is aimed to increase the efficiency of Telkom's customer service by developing a 24/7 automated chatbot. The main goals is to improve customer experience by providing fast and accurate responses to customer questions that is easily accessible via `WhatsApp`.

### Key Features
- Used Retrieval-Augmented Generation (RAG) to ensure responses are based on a specific factual data.
- Built a custom knowledge base in Markdown format.
- Integrated with `WhatsApp` for easy access by customers.
- System architecture designed to be deployable in company's intranet.

### Tech Stack
- Core: Python, `Langchain`, `Huggingface` Transformers
- AI/LLM: `Azure` OpenAI, RAG (Retrieval-Augmented Generation)
- Database: `ChromaDB` (for vector storage)
- API: Meta / `WhatsApp` API

## Development Process
At the start of the project, the first step I do is researching and planning the chatbot's architecture, then collecting and cleaning Telkom's data to build the knowledge base. I then developed the RAG system, where user queries are embedded and used to search for relevant information in `ChromaDB`. This retrieved context is then passed to the `Azure` LLM, along with the user's question, to generate an accurate response. This main pipeline is made using the `langchain` library.

### Documentation

![Retrieval-Augmented Generation (RAG) System Flowchart](/images/projects/custom-chatbot-rag/rag-system.png)

RAG system is built by combining Retrieval and Generation:
- Retrieval: process used to search relevant information from the knowledge base.
- Generation: process for LLM model to generate answers based on the data found.

![System Architecture](/images/projects/custom-chatbot-rag/system-architecture.png)

![Knowledge Base Flowchart](/images/projects/custom-chatbot-rag/knowledge-base.png)

![Chatbot System Flowchart](/images/projects/custom-chatbot-rag/chatbot-system.png)

## Results

![Chatbot Interaction Example](/images/projects/custom-chatbot-rag/chatbot-result.png)

- The RAG-based LLM chatbot was successfully developed as a prototype and can be accessed via `WhatsApp` for ease of use.
- The chatbot can accurately answer specific questions related to Telkom, tested manually with 67 questions showed that the chatbot achieved an **88.81% accuracy** rate.
- The chatbot average reponse time is around **6.27 seconds**.
- This prototype can serve as a important foundation for further development and implementation of LLM-based chatbots in Telkom's customer service.
