"use client";

import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

export default function MarkdownViewer({ content }: Props) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
