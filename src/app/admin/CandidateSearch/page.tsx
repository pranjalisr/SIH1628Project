'use client'

import { useState } from 'react';
import SearchBar from '../../component/SearchBar';
import CandidateCard from '../../component/CandidateCard';
import { candidates } from '../data/candidates';
import { Candidate } from '../types/candidate';

export default function Home() {
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>(candidates);

  const handleSearch = (query: string) => {
    const filtered = candidates.filter(candidate =>
      candidate.skills.some(skill =>
        skill.toLowerCase().includes(query.toLowerCase())
      )
    ).sort((a, b) => b.credibilityScore - a.credibilityScore);

    setFilteredCandidates(filtered);
  };

  return (
    <main className="mt-28 container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Candidate Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCandidates.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </main>
  );
}

