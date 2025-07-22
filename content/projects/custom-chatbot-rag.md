---
title: Prototype Customer Service Chatbot with LLM-RAG
description: Developed a chatbot using LLM and RAG with a custom knowledge base to improve customer service efficiency at Telkom.
date: 2024-09-20
category: data-ai-llms
cover_image: /images/projects/custom-chatbot-rag/chatbot-result.png
---

# Prototype Customer Service Chatbot with LLM-RAG

## Introduction

This project is when I was an Intern at PT Telkom Indonesia. In this project, I was tasked with developing an LLM-based `WhatsApp` chatbot prototype using a knowledge base sourced from PT Telkom Indonesia's data.

The development of this chatbot was driven by the goal of improving user interaction by providing a chatbot service that can provide fast and consistent responses, as well as creating a chatbot service that is available 24/7 without the need for human assistance.

This chatbot system is increasingly relevant with the development of technology today, when artificial intelligence and automation are increasingly being used in various aspects of industry, including customer service.

The goals of this project include:
1. Developing an LLM-based chatbot to improve the efficiency of Telkom's customer service.
2. Building a knowledge base using Telkom's data.
3. Integrating the chatbot with `WhatsApp` so that it can be accessed easily and quickly by customers.

## Development Process

There are several important steps, including:
1. Project research and planning.
2. Data collection and cleaning.
3. Fine-tuning the RAG model.
4. Integration with `WhatsApp` API.

### Retrieval-Augmented Generation (RAG)

![Retrieval-Augmented Generation (RAG) System Flowchart](/images/projects/custom-chatbot-rag/rag-system.png)

Based on the research, Retrieval-Augmented Generation (RAG) is usually used in LLMs that need to generate responses based on a specific factual data, and prevent the model to hallucinate wrong or innacurate information.

This is done by combining Retrieval and Generation:
- Retrieval: process used to search relevant information from the knowledge base.
- Generation: process for LLM model to generate answers based on the data found.

### System Architecture

![System Architecture](/images/projects/custom-chatbot-rag/system-architecture.png)

The system architecture consists of several components, including:
- Internet:
    - `WhatsApp` API connects customers with chatbot servers.
- Intranet:
    - `Python` servers manage data flow and integration.
    - `ChromaDB` stores vector-based knowledge bases.
    - `Azure OpenAI` provides AI models to generate responses.

### Knowledge Base

![Knowledge Base Flowchart](/images/projects/custom-chatbot-rag/knowledge-base.png)

1. Telkom data are stored in Markdown (.md) format.
2. Splitting, data is split based on headers and text similarities.
3. Embedding model: "naufalihsan/indonesian-sbert-large".
4. `ChromaDB` is used for semantic similarity-based data search.


### Chatbot System

![Chatbot System Flowchart](/images/projects/custom-chatbot-rag/chatbot-system.png)

The main flow for the chatbot is created with the help of the `langchain` library, using the various classes provided to create a pipeline that can be customized for chatbot tasks, the flow is as follows:
1. User input is embedded using the local embedding model provided by `huggingface`.
2. The embedded input is used in similarity search using `ChromaDB` to find relevant data.
3. The retrieved data is then used as the context for the `Azure` LLM model. This combines system prompt, user input, and context.
4. The LLM generates a relevant response then returns it to the user.


## Results

![Chatbot Interaction Example](/images/projects/custom-chatbot-rag/chatbot-result.png)

- The RAG-based LLM chatbot was successfully developed as a prototype.
- The chatbot can accurately answer specific questions related to Telkom.
- The chatbot can be accessed via `WhatsApp` for ease of use.

## Testing and Evaluation

The chatbot was evaluated manually by testing various questions, and the results checked by human manually to mark the answer as correct or incorrect. This is done like this because the limitation on the data used, which is not suitable for the usual evaluation metrics such as BLEU or ROUGE, and the limited time available for this project.

The evaluation using 67 questions have these results:
- Answered 88.81% of the questions correctly.
- Response time is around 6.27 seconds per question.

## Conclusion
The development of the LLM-based `WhatsApp` chatbot prototype using RAG has been successfully completed. The chatbot can provide accurate response with around 88.81% accuracy, and can be accessed easily via `WhatsApp`. This prototype can serve as a important foundation for further development and implementation of LLM-based chatbots in Telkom's customer service.

## Future Work
Recommendations for future work include:
- Improve Knowledge Base with better structure to improve accuracy.
- More in-depth testing and using the correct evaluation metrics to measure the chatbot's performance.
- Integration with other platforms such as Telegram or internal company applications.

## Technologies Used
- Python
- Langchain
- ChromaDB
- Azure OpenAI
- Meta / WhatsApp API
- Huggingface Transformers
