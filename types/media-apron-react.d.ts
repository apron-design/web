declare module '@media-apron/react' {
  import { ComponentType, ReactElement } from 'react';

  export interface VideoProps {
    src?: string;
    source?: string[] | VideoItem[];
    poster?: string;
    cc?: string;
    primaryColor?: string;
    [key: string]: any;
  }

  export interface AudioProps {
    src?: string;
    source?: string[] | AudioItem[];
    poster?: string;
    primaryColor?: string;
    [key: string]: any;
  }

  export interface VideoItem {
    title?: string;
    summary?: string;
    poster?: string;
    url: string;
    cc?: string;
  }

  export interface AudioItem {
    title?: string;
    summary?: string;
    poster?: string;
    url: string;
  }

  export const Video: ComponentType<VideoProps>;
  export const Audio: ComponentType<AudioProps>;
  
  // 导出所有可能的组件
  const components: {
    Video: ComponentType<VideoProps>;
    Audio: ComponentType<AudioProps>;
    [key: string]: ComponentType<any>;
  };
  
  export default components;
}
