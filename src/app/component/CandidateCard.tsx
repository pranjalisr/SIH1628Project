import { Candidate } from '../../app/admin/types/candidate';
import { User, Star, Mail } from 'lucide-react';

type CandidateCardProps = {
  candidate: Candidate;
};

export default function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105">
      <div className="flex items-center mb-4">
        <User size={40} className="text-blue-500 mr-4" />
        <div>
          <h2 className="text-xl font-semibold">{candidate.name}</h2>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 mr-1" />
            <span className="text-gray-600">{candidate.credibilityScore}</span>
          </div>
        </div>
      </div>
      <div className="mb-4 flex items-center">
        <Mail size={16} className="text-gray-500 mr-2" />
        <a href={`mailto:${candidate.email}`} className="text-blue-600 hover:underline">
          {candidate.email}
        </a>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Skills:</h3>
        <div className="flex flex-wrap gap-2">
          {candidate.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

