export interface SerialConfig {
  portId: string;
  baudRate: number;
  dataBits: 7 | 8;
  stopBits: 1 | 2;
  parity: 'none' | 'even' | 'odd';
}

export interface SerialMessage {
  id: string;
  timestamp: number;
  data: string;
  direction: 'received' | 'sent';
  format: 'HEX' | 'ASCII';
}

export interface QuickCommand {
  id: string;
  name: string;
  command: string;
  format: 'ASCII' | 'HEX';
  addNewline: boolean;
}

export interface LogConfig {
  maxSize: number;
  autoScroll: boolean;
  showTimestamp: boolean;
}

export interface SendConfig {
  autoNewline: boolean;
}

export interface TimedCommand {
  id: string;
  quickCommandId: string; // 关联的 QuickCommand 的 id
  interval: number; // 间隔时间(毫秒)
  isLoop: boolean; // 是否循环发送
  isActive: boolean; // 是否正在运行
}