export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      blog: {
        Row: {
          bigImage: string;
          group: string;
          id: number;
          img: string;
          title: string;
        };
        Insert: {
          bigImage?: string;
          group?: string;
          id?: number;
          img?: string;
          title?: string;
        };
        Update: {
          bigImage?: string;
          group?: string;
          id?: number;
          img?: string;
          title?: string;
        };
        Relationships: [];
      };
      case: {
        Row: {
          bgColor: string;
          desc: string;
          icon: string;
          id: number;
          img: string;
          postImage: string;
          title: string;
        };
        Insert: {
          bgColor?: string;
          desc?: string;
          icon?: string;
          id?: number;
          img?: string;
          postImage?: string;
          title?: string;
        };
        Update: {
          bgColor?: string;
          desc?: string;
          icon?: string;
          id?: number;
          img?: string;
          postImage?: string;
          title?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
