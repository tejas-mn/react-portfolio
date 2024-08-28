import ProjectsGrid from "./ProjectsGrid";
import React, { Suspense, useMemo, useState } from "react";
import { lazy } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowDown';
import Dropdown2 from "../../utils/components/DropDown2";
import ProjectListSkeleton from "./Skeletons/ProjectListSkeleton";
import ProjectGridSkeleton from "./Skeletons/ProjectGridSkeleton";
import zIndex from "@mui/material/styles/zIndex";

const ProjectsList = lazy(() => import('./ProjectsList'));

const sectionsConfig = {
  PROJECTS: {
    component: ProjectsGrid,
    skeleton: ProjectGridSkeleton,
    label: "🚀 Projects",
  },
  ARTICLES: {
    component: ProjectsList,
    skeleton: ProjectListSkeleton,
    label: "📰 Articles",
  },
  ARTICLES: {
    component: ProjectsList,
    skeleton: ProjectListSkeleton,
    label: "📰 Articles",
  }
};

export default function Work() {
  return (
    <>
      <WorkSection />
    </>
  )
}

function WorkSection() {

  const [activeSection, setActiveSection] = useState('PROJECTS');
  const [isFocused, setIsFocused] = useState(false);

  const activeSectionComponent = useMemo(() => {
    switch (activeSection) {
      case '🚀 Projects': return <ProjectsGrid isVisible={true} />;
      case '📰 Articles': return <ProjectsList />;
      // case '🏅 Achievements' : return <p>Coming soon..</p>;
      // case '✨ Certifications' : return <p>Coming soon..</p>;
      default: return <ProjectsGrid isVisible={true} />;
    }
  }, [activeSection])

  return (
    <section className="right-01">
      <h2>👨🏼‍💻 Work</h2>

      <div style={{
        marginTop:'12px'
      }}>
        <div style={styles.projectHeader} className="project-title-container">

          <div className="btn-group" style={{ display: 'flex', gap: '10px' }}>

            {/* <div style={{
    position: 'relative'
  }}>
    <div
      style={{ ...styles.tab, backgroundColor: (activeSection === 'PROJECTS') ? 'var(--active-tab-light)' : 'var(--inactive-tab-light)' }}
      className="project-title"
      onClick={() => {
        setActiveSection('PROJECTS')
        setIsFocused((prev) => !prev)
      }}
    >
      <span className="rocket">{"🚀 "}</span> Projects  <KeyboardArrowDownIcon id="kbd-dwn-arrow" style={{
        transform: isFocused && 'rotate(180deg)',
        transition: 'transform 0.4s',
        fontSize: 'x-large',
        display: 'none'
      }} />
    </div>
    {isFocused && (
      <div className="drp-dwn">
        <DropDown options={["Articles"]} onSelect={() => { setActiveSection('ARTICLES'); setIsFocused(false) }} />
      </div>
    )}

  </div>

  <div
    style={{ ...styles.tab, backgroundColor: (activeSection === 'ARTICLES') ? 'var(--active-tab-light)' : 'var(--inactive-tab-light)' }}
    className="project-title"
    id="articles-tab"
    onClick={() => setActiveSection('ARTICLES')}
  >
    📰 Articles
  </div> */}

            <Dropdown2 items={['🚀 Projects', '📰 Articles']} onSelect={setActiveSection} />
            {/* , '🏅 Achievements', '✨ Certifications' */}

          </div>

        </div>

        <Suspense fallback={
          (activeSection === '📰 Articles') ? <ProjectListSkeleton /> : <div className="project-grid"><ProjectGridSkeleton /></div>
        }>

          {activeSectionComponent}

        </Suspense>

      </div>

    </section>
  );
}

const styles = {
  projectHeader: {
    display: "flex",
    justifyContent: "space-between",
    zIndex: 1,
    position: "relative",
    alignItems: "center",
    margin: '0 10px 10px'
  },
  title: { color: "white" },
  tab: {
    color: 'var(--text-color-light)',
    borderRadius: '8px',
    textAlign: 'center',
    display: 'flex',
    height: 'min-content',
    fontSize: 'large',
    boxShadow: '0px 1px 11px 0px rgba(0, 0, 0, 0.08)',
    padding: '6px 15px',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  }
};
