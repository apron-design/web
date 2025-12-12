import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

// 读取现有的文档索引
const documentsPath = join(process.cwd(), 'lib/documents.ts');
let documentsContent = readFileSync(documentsPath, 'utf-8');

// 读取 React 目录下的所有 Markdown 文件
const reactDocsDir = join(process.cwd(), 'docs/react');
const reactFiles = readdirSync(reactDocsDir).filter(file => file.endsWith('.md'));

// 存储现有文档的 ID，避免重复
const existingIds = new Set();

// 解析现有文档中的 ID
const idMatches = documentsContent.match(/id:\s*"([^"]+)"/g);
if (idMatches) {
  idMatches.forEach(match => {
    const id = match.match(/id:\s*"([^"]+)"/)[1];
    existingIds.add(id);
  });
}

// 为每个 React 文档创建索引条目
const newEntries = [];

reactFiles.forEach(file => {
  const filePath = join(reactDocsDir, file);
  const content = readFileSync(filePath, 'utf-8');
  
  // 提取文件名作为 ID（去除 .md 扩展名）
  const id = file.replace('.md', '');
  
  // 如果 ID 已存在，跳过
  if (existingIds.has(id)) {
    return;
  }
  
  // 提取标题（第一行的 # 标题）
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : id;
  
  // 提取前 200 个字符作为内容摘要
  // 移除 Markdown 语法和代码块
  let cleanContent = content
    .replace(/^#\s+.+$/gm, '') // 移除标题行
    .replace(/:::demo[\s\S]*?:::/g, '') // 移除代码演示块
    .replace(/```[\s\S]*?```/g, '') // 移除代码块
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 移除链接格式，保留链接文本
    .replace(/[*_~`]/g, '') // 移除强调符号
    .replace(/^\s+|\s+$/g, '') // 移除首尾空白
    .replace(/\s+/g, ' '); // 将多个空白字符合并为单个空格
  
  // 获取前 200 个字符
  const excerpt = cleanContent.substring(0, 200) + (cleanContent.length > 200 ? '...' : '');
  
  // 构造路径
  const routePath = `/react/${id}`;
  
  newEntries.push(`  { 
    id: "${id}", 
    title: "${title}", 
    path: "${routePath}", 
    content: "${excerpt}" 
  }`);
});

// 如果有新条目，更新文档文件
if (newEntries.length > 0) {
  // 找到数组结尾的位置
  const arrayEndIndex = documentsContent.lastIndexOf('];');
  
  if (arrayEndIndex !== -1) {
    // 在数组结尾前插入新条目
    const insertPosition = arrayEndIndex;
    const newContent = documentsContent.slice(0, insertPosition) + 
                      ',\n' + newEntries.join(',\n') + 
                      '\n' + documentsContent.slice(insertPosition);
    
    writeFileSync(documentsPath, newContent, 'utf-8');
    console.log(`成功添加 ${newEntries.length} 个新的 React 文档到搜索索引中`);
  } else {
    console.error('无法找到文档数组的结尾位置');
  }
} else {
  console.log('没有新的 React 文档需要添加到搜索索引中');
}