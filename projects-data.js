window.PORTFOLIO_PROJECTS = [
  {
    slug: "cited-knowledge-desk",
    title: "Cited Knowledge Desk",
    type: "Trustworthy RAG",
    eyebrow: "Document Q&A with citations",
    summary:
      "A Django RAG workspace for asking questions over uploaded documents with answer citations tied back to source documents, chunks, pages, and match scores.",
    card:
      "Document Q&A workspace with retrieval, citations, streaming chat, feedback review, and RAG evaluation.",
    cover: "assets/cited/dashboard.png",
    images: [
      {
        src: "assets/cited/chat-citations.png",
        alt: "Cited chat UI with answer evidence",
      },
      {
        src: "assets/cited/evaluation-dashboard.png",
        alt: "RAG evaluation dashboard",
      },
    ],
    tags: ["Django 6", "Channels", "Celery", "pgvector", "OpenAI", "pytest"],
    highlights: [
      "Workspace-scoped document upload for PDF, Markdown, text, and DOCX files.",
      "Celery ingestion pipeline for extraction, chunking, embeddings, and retrieval.",
      "Streaming Channels/WebSocket chat UI with persistent source-backed citations.",
      "Citation records tied to source document, chunk, page, and match score.",
      "Evaluation harness for recall, citation precision, faithfulness, relevance, abstention, and latency.",
    ],
    flow: [
      {
        step: "Ingest",
        detail: "Users upload documents into a workspace. Files are validated, stored, and prepared for background processing.",
      },
      {
        step: "Chunk & Embed",
        detail: "Celery workers extract text, split it into searchable chunks, and create deterministic or OpenAI-backed embeddings.",
      },
      {
        step: "Retrieve",
        detail: "Questions are scoped to the active workspace and matched against relevant chunks using vector search.",
      },
      {
        step: "Answer with Evidence",
        detail: "The assistant generates a grounded answer and stores citations with page, chunk, and match-score context.",
      },
      {
        step: "Evaluate",
        detail: "Gold questions measure retrieval recall, citation precision, faithfulness, abstention, relevance, and latency.",
      },
    ],
    repoPath: "D:/projects/high caliber projects/cited-knowledge-desk",
  },
  {
    slug: "support-operations-copilot",
    title: "Support Operations Copilot",
    type: "Safe support automation",
    eyebrow: "Human-reviewed AI for support teams",
    summary:
      "A safer AI assistant for ecommerce support teams where model output becomes reviewed drafts and sensitive customer-impacting actions move through approval flows.",
    card:
      "AI support workspace for ticket triage, grounded reply drafting, PII redaction, approvals, and audits.",
    cover: "assets/support/dashboard.png",
    coverPanel: {
      title: "Support Ops",
      items: ["Ticket triage", "PII redaction", "Lead approvals"],
    },
    images: [
      {
        src: "assets/support/ticket-detail.png",
        alt: "Support ticket detail with AI suggestions",
      },
      {
        src: "assets/support/approvals.png",
        alt: "Approval queue for sensitive support actions",
      },
    ],
    tags: ["Django 5.2", "DRF", "Celery", "Redis", "PII Redaction", "Approvals"],
    highlights: [
      "Ticket classification for intent, priority, sentiment, SLA risk, and escalation.",
      "Retrieval-grounded reply drafting with source snapshots and editable agent drafts.",
      "PII redaction before external model calls.",
      "Human approval queues for refunds, cancellations, credits, account closure, data export, and data deletion.",
      "Seeded ecommerce demo workspace plus support-case evaluation smoke suite.",
    ],
    flow: [
      {
        step: "Triage",
        detail: "Support tickets are classified by intent, priority, sentiment, SLA risk, and escalation need.",
      },
      {
        step: "Summarize",
        detail: "The copilot creates internal summaries and recommended next actions for the support agent.",
      },
      {
        step: "Retrieve Policy",
        detail: "Knowledge base chunks and macros are searched to ground the reply in current support policy.",
      },
      {
        step: "Draft Safely",
        detail: "PII is redacted before model calls and AI output is stored as an editable draft, not sent automatically.",
      },
      {
        step: "Approve & Audit",
        detail: "Sensitive actions route to support leads and audit events record classification, drafting, approval, and decisions.",
      },
    ],
    repoPath: "D:/projects/high caliber projects/support-operations-copilot",
  },
  {
    slug: "multimodal-document-analyst",
    title: "Multimodal Document Analyst",
    type: "Document AI system",
    eyebrow: "PDF/image extraction and review",
    summary:
      "A document AI system for extracting structured data from PDFs and images, validating fields, routing uncertainty to humans, and exporting corrected results.",
    card:
      "PDF/image extraction, schema validation, review queues, cited document chat, exports, and evaluation.",
    cover: "assets/document/dashboard.png",
    images: [
      {
        src: "assets/document/document-detail.png",
        alt: "Document detail with extracted fields",
      },
      {
        src: "assets/document/document-chat.png",
        alt: "Cited chat over document content",
      },
    ],
    tags: ["Django", "DRF", "PyMuPDF", "Pillow", "Celery", "Exports"],
    highlights: [
      "PDF, PNG, JPG, and TIFF upload validation with workspace roles and document libraries.",
      "PyMuPDF/Pillow processing for page text, previews, image normalization, and extraction evidence.",
      "Schema-based extraction runs with confidence, validation errors, review tasks, and audit events.",
      "Cited document chat over processed page text.",
      "JSON/CSV export history and extraction evaluation reports.",
    ],
    flow: [
      {
        step: "Upload",
        detail: "Users upload PDFs or images into a workspace with role-based access and file validation.",
      },
      {
        step: "Process",
        detail: "Celery workers extract PDF text, render page previews, normalize images, and prepare page-level evidence.",
      },
      {
        step: "Extract",
        detail: "Document schemas guide structured extraction runs with field confidence, source page, and source text.",
      },
      {
        step: "Review",
        detail: "Low-confidence or invalid fields become review tasks for human correction and approval.",
      },
      {
        step: "Export & Evaluate",
        detail: "Reviewed fields are exported as JSON/CSV while evaluation reports track accuracy, F1, missing fields, and invalid outputs.",
      },
    ],
    repoPath: "D:/projects/high caliber projects/multimodal-document-analyst",
  },
];
