import React from 'react';
import { useParams } from 'react-router-dom';
import KnowledgeBase from '../../Home_Components/KnowledgeBase';
import BranchPerformance from '../../Home_Components/BranchPerformance';
import '../../../Styles/DetailedNoticePage.css';
import noticeDataAdmin from './noticeDataAdmin';
import NoticeContentAdmin from './NoticeContentAdmin';

const DetailedEventsPageAdmin = () => {
  const { id } = useParams();
  const notice = noticeDataAdmin.find(notice => notice.id === parseInt(id));

  if (!notice) {
    return <div>Notice not found</div>;
  }

  console.log('Notice:', notice);

  return (
    <div className="full-notices-page">
      <div className="full-notices-column1">
        <KnowledgeBase />
      </div>
      <hr />
      <div className="full-notices-column2">
        <NoticeContentAdmin notice={notice} /> {/* Use NoticeContent component */}
      </div>
      <hr />
      <div className="full-notices-column4">
        <BranchPerformance />
      </div>
    </div>
  );
};

export default DetailedEventsPageAdmin;

