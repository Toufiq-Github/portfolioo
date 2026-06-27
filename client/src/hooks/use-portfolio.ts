import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

const staticProjects = [
  {
    id: 1,
    title: "Ecommerce Web App",
    description: "A full-featured ecommerce platform with advanced filtering, cart management, and secure checkout process.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "ShadCN UI", "Firebase Auth & Firestore", "Lenis", "Vercel"],
    imageUrl: "Ecommerce.png",
    githubUrl: null,
    liveUrl: "https://clothivastore.vercel.app/",
    order: 1,
  },
  {
    id: 2,
    title: "Prompt Refiner",
    description: "A high-performance Next.js application designed to transform rough ideas into structured, professional AI prompts.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Google Gemini API", "Firebase", "Vercel"],
    imageUrl: "PromptRefiner.png",
    githubUrl: null,
    liveUrl: "https://enhenceprompt.vercel.app/",
    order: 2,
  },
  {
    id: 3,
    title: "Retinal Disease Detection",
    description: "Advanced deep learning system for automated detection of retinal diseases using a Hybrid Deep Learning Model with Explainable AI (XAI) for clinical transparency.",
    techStack: ["Python", "Deep Learning", "TensorFlow", "OpenCV", "XAI"],
    imageUrl: "retina.png",
    githubUrl: "https://github.com/Toufiq-Github/Retina_Disease_Classifiaction",
    liveUrl: null,
    order: 3,
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
