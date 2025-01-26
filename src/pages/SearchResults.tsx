import React from 'react';
import { Layout } from '@/layout';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const navigate = useNavigate();

  return (
    <Layout
      showSidebar={false}
      showHeader={true}
      header={{
        title: 'Search Results',
        navigation: [],
        showNotifications: false,
        showUserMenu: false,
        showThemeToggle: true,
      }}
    >
      <div className="p-6">
        {/* Search Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Search Results for "query"</h1>
          <Input placeholder="Refine search..." className="w-1/3" />
        </div>

        {/* Results List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4" onClick={() => navigate('/note-editor')}>
            <h3 className="font-semibold">Note Title</h3>
            <p className="text-sm text-muted-foreground">This is a brief preview of the note...</p>
          </Card>
          <Card className="p-4" onClick={() => navigate('/note-editor')}>
            <h3 className="font-semibold">Note Title</h3>
            <p className="text-sm text-muted-foreground">This is a brief preview of the note...</p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
