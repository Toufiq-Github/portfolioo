import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

const staticProjects = [
  {
    id: 1,
    title: "Document Management System",
    description: "A secure full-stack document management application for organizing files, managing role-based access, automating data extraction, generating reports, and streamlining collaboration.",
    techStack: ["Spring Boot", "Angular", "PostgreSQL", "Spring Security", "JWT", "REST APIs"],
    imageUrl: "DMS.png",
    githubUrl: "https://github.com/Toufiq-Github/sms-frontend",
    secondaryGithubUrl: "https://github.com/Toufiq-Github/sms-backend",
    liveUrl: "",
    order: 1,
  },
  {
    id: 2,
    title: "TeamSync – A Real Time Communication Platform",
    description: "A real-time collaboration platform built for professional communication with modern UI, live interactions, and AI-assisted features.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Firebase", "Firestore", "Google Genkit", "Tailwind CSS"],
    imageUrl: "TeamSync.png",
    githubUrl: "https://github.com/Toufiq-Github/CodeAlpha-Real-Time-Communication-App",
    liveUrl: "https://teamsyncwithyou.vercel.app/",
    order: 2,
  },
  {
    id: 3,
    title: "Clothiva - Ecommerce Store",
    description: "A full-featured ecommerce platform with advanced filtering, cart management, and secure checkout process.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    imageUrl: "Ecommerce.png",
    githubUrl: "https://github.com/Toufiq-Github/E-commerce-Website",
    liveUrl: "https://clothivastore.vercel.app/",
    order: 3,
  },
  {
    id: 4,
    title: "Prompt Refiner",
    description: "An AI-powered tool to enhance and refine prompts for better results. Improves prompt clarity and effectiveness for various applications.",
    techStack: ["React", "TypeScript", "OpenAI", "Tailwind CSS"],
    imageUrl: "PromptRefiner.png",
    githubUrl: "",
    liveUrl: "https://enhenceprompt.vercel.app/",
    order: 4,
  },
  {
    id: 5,
    title: "Retinal Disease Detection",
    description: "Advanced deep learning system for automated detection of retinal diseases using a Hybrid Deep Learning Model with Explainable AI (XAI) for clinical transparency.",
    techStack: ["Python", "Deep Learning", "TensorFlow", "OpenCV", "XAI"],
    imageUrl: "retina.png",
    githubUrl: "https://github.com/Toufiq-Github/Retina_Disease_Classifiaction",
    liveUrl: "",
    order: 5,
  },
];

const staticTimeline = [
  {
    id: 1,
    title: "Bachelor of Science, Computer Science & Engineering",
    organization: "EAST WEST UNIVERSITY – Dhaka, Bangladesh",
    period: "Oct 2021 – April 2026",
    type: "education",
    order: 1,
  },
];

export function useProjects() {
  return {
    data: staticProjects,
    isLoading: false,
    isError: false,
  };
}

export function useTimeline() {
  return {
    data: staticTimeline,
    isLoading: false,
    isError: false,
  };
}

export function useSendMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: MessageInput) => {
      const validated = api.messages.create.input.parse(data);
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.messages.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }

      return api.messages.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
