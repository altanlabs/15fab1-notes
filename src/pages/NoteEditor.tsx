import React from 'react';
import { Layout } from '@/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const NoteEditor = () => {
  const navigate = useNavigate();

  return (
    <Layout
      showSidebar={false}
      showHeader={true}
      header={{
        title: 'Edit Note',
        navigation: [],
        showNotifications: false,
        showUserMenu: false,
        showThemeToggle: true,
        actions: [
          { icon: <span>💾</span>, label: 'Save', onClick: () => alert('Note saved!') },
          { icon: <span>🗑️</span>, label: 'Delete', onClick: () => alert('Note deleted!') },
        ],
      }}
    >
      <div className="p-6">
        <Button variant="ghost" onClick={() => navigate(-1)}>Back</Button>

        {/* Editor Area */}
        <div className="mt-4">
          <Input placeholder="Note Title" className="mb-4" />
          <Textarea placeholder="Write your note here..." className="w-full h-64" />
        </div>

        {/* Tagging System */}
        <div className="mt-4">
          <h3 className="font-semibold">Tags</h3>
          <div className="flex space-x-2">
            <Badge>Tag 1</Badge>
            <Badge>Tag 2</Badge>
            <Button variant="ghost" size="icon">+</Button>
          </div>
        </div>

        {/* Folder Assignment */}
        <div className="mt-4">
          <h3 className="font-semibold">Folder</h3>
          <select className="border p-2 rounded">
            <option>Folder 1</option>
            <option>Folder 2</option>
          </select>
        </div>
      </div>
    </Layout>
  );
};

export default NoteEditor;
