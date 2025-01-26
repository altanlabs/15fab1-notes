import React from 'react';
import { Layout } from '@/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sidebar } from '@/components/ui/sidebar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MainDashboard = () => {
  return (
    <Layout
      showSidebar={true}
      showHeader={true}
      header={{
        title: 'My Notes App',
        navigation: [],
        showNotifications: false,
        showUserMenu: false,
        showThemeToggle: true,
      }}
    >
      <div className="flex h-full">
        {/* Sidebar Navigation */}
        <Sidebar className="w-64 border-r border-border">
          <div className="p-4">
            <h2 className="text-lg font-semibold">Folders</h2>
            {/* List of folders */}
            <ul className="mt-2 space-y-2">
              <li className="flex justify-between items-center">
                <span>Folder 1</span>
                <Button variant="ghost" size="icon">+</Button>
              </li>
              <li className="flex justify-between items-center">
                <span>Folder 2</span>
                <Button variant="ghost" size="icon">+</Button>
              </li>
            </ul>
            <Button className="mt-4 w-full">Add Folder</Button>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Tags</h2>
            {/* List of tags */}
            <ul className="mt-2 space-y-2">
              <li><Badge>Tag 1</Badge></li>
              <li><Badge>Tag 2</Badge></li>
            </ul>
          </div>
        </Sidebar>

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          {/* Header with Search Bar */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Notes</h1>
            <Input placeholder="Search notes..." className="w-1/3" />
          </div>

          {/* Note List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-4">
              <h3 className="font-semibold">Note Title</h3>
              <p className="text-sm text-muted-foreground">This is a brief preview of the note...</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold">Note Title</h3>
              <p className="text-sm text-muted-foreground">This is a brief preview of the note...</p>
            </Card>
          </div>

          {/* Add Note Button */}
          <Button className="fixed bottom-8 right-8">Add Note</Button>
        </div>
      </div>
    </Layout>
  );
};

export default MainDashboard;
