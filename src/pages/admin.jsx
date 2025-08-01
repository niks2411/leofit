import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Download, Loader2, Lock, Search } from 'lucide-react';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesPerPage = 10;

  useEffect(() => {
    if (!authenticated) return;

    const fetchMessages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const q = query(
          collection(db, 'contacts'),
          orderBy('timestamp', 'desc') // Sort by timestamp (newest first)
        );
        const querySnapshot = await getDocs(q);
        const fetchedMessages = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate() || new Date(), // Fallback to current date if missing
        }));
        setMessages(fetchedMessages);
        setFilteredMessages(fetchedMessages);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError('Failed to load messages. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [authenticated]);

  useEffect(() => {
    const filtered = messages.filter(
      message =>
        message.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.program?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMessages(filtered);
    setCurrentPage(1);
  }, [searchTerm, messages]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const ADMIN_PASSWORD = "1234";
    
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      setError('Incorrect password');
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Program', 'Message', 'Date'];
    const csvContent = [
      headers.join(','),
      ...filteredMessages.map(msg => 
        [
          `"${msg.name || ''}"`,
          `"${msg.email || ''}"`,
          `"${msg.phone || ''}"`,
          `"${msg.company || ''}"`,
          `"${msg.program || ''}"`,
          `"${msg.message?.replace(/"/g, '""') || ''}"`,
          `"${msg.timestamp.toLocaleString()}"` // Updated to use timestamp
        ].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `contact-submissions-${new Date().toISOString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPassword('');
    setMessages([]);
    setFilteredMessages([]);
  };

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);
  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 mt-12">
      {!authenticated ? (
        <div className="max-w-md mx-auto mt-20 p-8 bg-gray-800 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <Lock className="w-12 h-12 mx-auto text-purple-500 mb-4" />
            <h2 className="text-2xl font-bold">Admin Login</h2>
            <p className="text-gray-400 mt-2">Enter your password to access the dashboard</p>
          </div>
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(null);
                }}
                className="w-full px-4 py-2 bg-gray-700 rounded text-white"
                autoFocus
              />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white">
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">Contact Form Submissions</h1>
            <div className="flex gap-2">
              <button 
                onClick={exportToCSV}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, company or program..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded text-white"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
            </div>
          ) : (
            <>
              <div className="overflow-auto rounded-lg border border-gray-700">
                <table className="min-w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left min-w-[150px]">Name</th>
                      <th className="px-4 py-3 text-left">Email</th>
                      <th className="px-4 py-3 text-left">Phone</th>
                      <th className="px-4 py-3 text-left">Company</th>
                      <th className="px-4 py-3 text-left">Program</th>
                      <th className="px-4 py-3 text-left min-w-[200px]">Message</th>
                      <th className="px-4 py-3 text-left min-w-[180px]">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentMessages.length > 0 ? (
                      currentMessages.map((msg) => (
                        <tr key={msg.id} className="hover:bg-gray-800/50 border-t border-gray-700">
                          <td className="px-4 py-3 font-medium">{msg.name || '-'}</td>
                          <td className="px-4 py-3 text-purple-400 break-all">{msg.email || '-'}</td>
                          <td className="px-4 py-3">{msg.phone || '-'}</td>
                          <td className="px-4 py-3">{msg.company || '-'}</td>
                          <td className="px-4 py-3">{msg.program || '-'}</td>
                          <td className="px-4 py-3 max-w-xs truncate" title={msg.message}>
                            {msg.message || '-'}
                          </td>
                          <td className="px-4 py-3">
                            {msg.timestamp.toLocaleString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="text-center py-8 text-gray-400">
                          {searchTerm ? 'No matching submissions found' : 'No submissions yet'}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {filteredMessages.length > 0 && (
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <div className="text-sm text-gray-400">
                    Showing {indexOfFirstMessage + 1} to{' '}
                    {Math.min(indexOfLastMessage, filteredMessages.length)} of{' '}
                    {filteredMessages.length} submissions
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Previous
                    </button>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      return (
                        <button
                          key={pageNum}
                          className={`px-4 py-2 rounded ${pageNum === currentPage ? 'bg-purple-600' : 'bg-gray-700'}`}
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    <button
                      className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;