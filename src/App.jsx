// src/App.jsx

import React, { useState } from 'react';
import { Play, Github, Award, Users, TrendingUp, Globe, Code, Heart, Zap, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import './App.css'; // Import the stylesheet

export default function PBSCOSIProposal() {
  const [hasAgreed, setHasAgreed] = useState(false);

  const resources = [
    { id: 'smilerun', title: 'SmileRun', description: 'Subway Surfers-inspired number theory game. Collect primes, perfect squares, and numbers divisible by specific values.', subject: 'Number Theory', url: 'https://rogersmath.github.io/smilerun/', image: '🏃' },
    { id: 'lightspeed', title: 'Lightspeed Jump', description: 'Navigate starships using trigonometry and coordinate systems. Master polar/cartesian conversions.', subject: 'Trigonometry', url: 'https://rogersmath.github.io/lightspeed/', image: '⚡' },
    { id: 'spanish', title: 'Spanish Learning', description: 'Duolingo-inspired language learning with PBSC branding. Gamified vocabulary and grammar practice.', subject: 'World Languages', url: 'https://rogersmath.github.io/pbsc-spanish/', image: '📚' },
    { id: 'crla', title: 'SLC Tutor Checklist', description: 'Professional training documentation for Student Learning Center tutors. A framework for effective sessions.', type: 'Training Resource', url: 'https://rogersmath.github.io/crla/', image: '📋' }
  ];

  const benefits = [
    { icon: <Award className="icon" />, title: 'National Recognition', description: 'Position PBSC as a leader in open-source educational innovation, elevating institutional reputation nationwide.' },
    { icon: <TrendingUp className="icon" />, title: 'Grant Funding Pipeline', description: '$1-2M potential in NSF, Dept of Education, Gates Foundation, and Lumina grants over 3 years.' },
    { icon: <Users className="icon" />, title: 'Student Success', description: 'Gamified learning improves engagement, retention, and pass rates—directly impacting institutional KPIs.' },
    { icon: <Globe className="icon" />, title: 'Workforce Partnerships', description: 'Community colleges and organizations nationwide adopt PBSC-developed resources, building institutional brand.' }
  ];

  const milestones = [
    { phase: 'Phase 1: Foundation', timeline: 'Months 1-6', investment: '0.25 FTE', outcomes: ['Polish current demos to commercial-grade quality', 'IRE approval and effectiveness studies with faculty', 'Establish legal framework and institutional GitHub', 'Document learning outcomes with pilot professors'] },
    { phase: 'Phase 2: Growth', timeline: 'Months 6-18', investment: '$50K + Grants', outcomes: ['Expand to 6-8 games across disciplines', 'Secure $300K-500K in foundation grants', 'Document learning outcomes and impact data', 'Present at national conferences'] },
    { phase: 'Phase 3: Sustainability', timeline: 'Months 18-36', investment: 'Grant Funded', outcomes: ['Release 10+ open-source resources', '$1-2M active grant funding', '50+ institutions using PBSC resources', 'National recognition and media coverage'] }
  ];

  if (!hasAgreed) {
    return (
      <div className="agreement-screen">
        <div className="agreement-card">
          <div className="agreement-header">
            <img src="https://www.palmbeachstate.edu/_resources/images/logo.jpg" alt="PBSC Logo" />
            <h1>Palm Beach State College</h1>
            <h2>Open Source Institute</h2>
            <p>Strategic Proposal for Educational Innovation</p>
          </div>
          <div className="agreement-body">
            <div className="disclaimer-box">
              <Zap className="icon" />
              <div>
                <h3>Confidential - Internal Distribution Only</h3>
                <p>This interactive proposal contains preliminary branding concepts and strategic information for PBSC leadership review. All materials shown with PBSC branding are pending official approval.</p>
              </div>
            </div>
            <div className="text-block">
              <p>This proposal demonstrates a new model for institutional innovation: <strong>open-source educational technology</strong> that elevates PBSC's national profile while serving students everywhere.</p>
              <p>The following interactive presentation includes live demonstrations of working prototypes, strategic roadmaps, and implementation details.</p>
            </div>
            <div className="acknowledgement-box">
              <h3><CheckCircle className="icon" /> By proceeding, I acknowledge:</h3>
              <ul>
                <li>• This is confidential internal documentation</li>
                <li>• Materials are pending official approval</li>
                <li>• I will handle this information appropriately</li>
              </ul>
            </div>
            <button onClick={() => setHasAgreed(true)} className="agreement-button">I Agree - View Proposal</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-layout">
      <header className="page-header">
        <div className="container header-content">
          <div className="header-brand">
            <img src="https://www.palmbeachstate.edu/_resources/images/logo.jpg" alt="PBSC Logo" />
            <div>
              <h1>PBSC Open Source Institute</h1>
              <p>Strategic Proposal for Educational Innovation</p>
            </div>
          </div>
          <div className="header-status">
            <div className="confidential">CONFIDENTIAL</div>
            <div className="internal-use">Internal Use Only</div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section page-section">
          <div className="container">
            <h2>Open-Source Educational Innovation</h2>
            <p>Position PBSC as a national leader by democratizing access to engaging, effective educational technology—while creating sustainable pathways for institutional recognition and grant funding.</p>
            <div className="hero-tags">
              <div className="hero-tag"><div className="tag-title">FREE & OPEN SOURCE</div><div className="tag-subtitle">MIT Licensed</div></div>
              <div className="hero-tag"><div className="tag-title">GRANT ELIGIBLE</div><div className="tag-subtitle">$1-2M Potential</div></div>
              <div className="hero-tag"><div className="tag-title">PROVEN IMPACT</div><div className="tag-subtitle">Working Prototypes</div></div>
            </div>
          </div>
        </section>

        <section className="page-section bg-white">
          <div className="container">
            <div className="section-title">
              <h2>The Vision</h2>
              <p>Three pillars that make this model transformative</p>
            </div>
            <div className="vision-grid">
              <div className="vision-card equity"><Globe className="icon" /><h3>Equity at Scale</h3><p>Free, high-quality learning games accessible to students everywhere—from Palm Beach County to rural communities nationwide. Zero marginal cost distribution.</p></div>
              <div className="vision-card opensource"><Code className="icon" /><h3>Open Source</h3><p>MIT licensed. Community-driven. Forkable and adaptable. Educational content that evolves with educator needs—attributed back to PBSC.</p></div>
              <div className="vision-card engagement"><Heart className="icon" /><h3>Engagement First</h3><p>Games leverage commercial-grade psychology to make learning addictive. Students don't "study trig"—they plot polar coordinates to navigate starships.</p></div>
            </div>
          </div>
        </section>

        <section className="page-section bg-light-gray">
          <div className="container">
            <div className="section-title">
              <h2>Working Prototypes</h2>
              <p>These aren't concepts—they're functional resources ready for classroom integration. Click any card to try them live.</p>
            </div>
            <div className="demos-grid">
              {resources.map(resource => (
                <a key={resource.id} href={resource.url} target="_blank" rel="noopener noreferrer" className="demo-card">
                  <div className="demo-card-header">
                    <div className="emoji">{resource.image}</div>
                    <h3>{resource.title}</h3>
                    <p className="subject">{resource.subject || resource.type}</p>
                    <div className="play-button">PLAY NOW →</div>
                  </div>
                  <div className="demo-card-body"><p>{resource.description}</p></div>
                </a>
              ))}
            </div>
            <div className="info-box">
              <h4><Zap className="icon" />Beyond Games</h4>
              <p>The PBSC-OSI framework supports any digital learning resource: training materials, procedural guides, interactive simulations, and more. Games are the flagship—but the model scales to all educational content.</p>
            </div>
          </div>
        </section>

        <section className="page-section bg-white">
          <div className="container">
            <div className="section-title">
              <h2>Strategic Value for PBSC</h2>
              <p>This initiative directly advances institutional goals: student success, national recognition, and sustainable funding.</p>
            </div>
            <div className="value-grid">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-card">
                  {benefit.icon}
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="model-box">
              <h3>The Model</h3>
              <div className="check-item-list">
                <div className="check-item"><CheckCircle className="icon" /><div><strong>All games free and open-source forever.</strong><span>MIT licensed for maximum adoption and community contribution.</span></div></div>
                <div className="check-item"><CheckCircle className="icon" /><div><strong>Grant funding supports development and research.</strong><span>NSF, Dept of Education, Gates Foundation, and Lumina actively fund open educational resources.</span></div></div>
                <div className="check-item"><CheckCircle className="icon" /><div><strong>Every resource credits PBSC.</strong><span>Brand recognition grows with adoption—the more institutions use our resources, the more prestigious PBSC becomes.</span></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-light-gray">
          <div className="container">
            <div className="section-title">
              <h2>Implementation Roadmap</h2>
              <p>A phased approach from foundation to sustainability, with clear milestones and minimal institutional risk.</p>
            </div>
            <div className="milestones-list">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="milestone-card">
                  <div className="milestone-header">
                    <div>
                      <h3>{milestone.phase}</h3>
                      <p>{milestone.timeline}</p>
                    </div>
                    <div className="milestone-investment">
                      <div className="amount">{milestone.investment}</div>
                      <div className="label">Resource Allocation</div>
                    </div>
                  </div>
                  <div className="milestone-body">
                    <h4>Key Outcomes:</h4>
                    <div className="outcomes-grid">
                      {milestone.outcomes.map((outcome, i) => (
                        <div key={i} className="outcome-item"><CheckCircle className="icon" /><span>{outcome}</span></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="info-box green">
              <h4><TrendingUp className="icon" />Low Risk, High Impact</h4>
              <p>Phase 1 requires minimal investment (0.25 FTE) to polish existing demos and establish effectiveness through IRB studies. Expansion is funded by grants, not institutional budget. Worst case: PBSC students benefit from better learning tools. Best case: National leadership and sustainable funding.</p>
            </div>
          </div>
        </section>

        <section className="page-section bg-white">
          <div className="container">
            <div className="section-title">
              <h2>IP Transfer and Resource Agreement</h2>
              <p>A clear framework for ownership, institutional support, and deliverables</p>
            </div>
            <div className="ip-grid">
              <div className="ip-card">
                <h3><CheckCircle className="icon" />Current Status</h3>
                <p>Four functional educational resources have been developed on personal time under GitHub account (rogersmath) as proof-of-concept demonstrations:</p>
                <ul className="bullet-list">
                  <li>SmileRun (Number Theory)</li>
                  <li>Lightspeed Jump (Trigonometry)</li>
                  <li>PBSC Spanish Quest (World Languages)</li>
                  <li>SLC Tutor Checklist (Training Framework)</li>
                </ul>
                <p className="small-italic">These prototypes demonstrate technical feasibility and pedagogical design, but require institutional support to reach commercial-grade quality and measurable impact.</p>
              </div>
              <div className="ip-card green">
                <h3><Users className="icon" />What I Need from PBSC</h3>
                <div className="needs-list">
                  <div className="need-item"><h4>1. Time Allocation (0.25 FTE)</h4><p>Dedicated work hours to polish existing prototypes and develop new resources.</p></div>
                  <div className="need-item"><h4>2. Subject Matter Expert Access</h4><p>Institutional endorsement to collaborate with PBSC faculty. SMEs receive credit but no stipend at this stage. Recruitment is my responsibility.</p></div>
                  <div className="need-item"><h4>3. Grant Development Support</h4><p>Access to grant writing resources to pursue federal funding opportunities.</p></div>
                  <div className="need-item"><h4>4. IRE Approval and Impact Validation</h4><p>Institutional Research and Effectiveness oversight to conduct studies with pilot faculty, establishing evidence-based learning outcomes.</p></div>
                </div>
              </div>
            </div>
            <div className="ip-card yellow full-width">
              <h3><Award className="icon" />What PBSC Receives</h3>
              <div className="receives-section">
                <h4>Immediate IP Transfer</h4>
                <p>Upon formal approval of PBSC-OSI, I will transfer ownership of all four existing prototypes to Palm Beach State College. All code will be:</p>
                <div className="outcomes-grid">
                  <div className="outcome-item"><CheckCircle className="icon" /><span>Rebranded with official PBSC identity</span></div>
                  <div className="outcome-item"><CheckCircle className="icon" /><span>Migrated to PBSC-OSI GitHub organization</span></div>
                  <div className="outcome-item"><CheckCircle className="icon" /><span>Released under MIT open-source license</span></div>
                  <div className="outcome-item"><CheckCircle className="icon" /><span>Attributed to Jesse Rogers as lead developer</span></div>
                </div>
              </div>
              <div className="receives-section">
                <h4>Guaranteed Deliverables (Phase 1)</h4>
                <p>I commit to polishing all four existing resources to commercial-grade quality suitable for:</p>
                <div className="outcomes-grid">
                  <div className="outcome-item bullet"><span>Classroom deployment with faculty partners</span></div>
                  <div className="outcome-item bullet"><span>IRE-approved effectiveness studies</span></div>
                  <div className="outcome-item bullet"><span>Grant application demonstrations</span></div>
                  <div className="outcome-item bullet"><span>Conference presentations and publications</span></div>
                </div>
              </div>
              <div className="sub-box">
                <h4>Potential Additional Output</h4>
                <p>Time permitting, additional games and training tools may be developed beyond these four core resources. All future work under PBSC-OSI will follow the same branding, ownership, and licensing framework.</p>
              </div>
            </div>
            <div className="legal-box">
              <h3>Legal and Ethical Framework</h3>
              <div className="check-item-list">
                <div className="check-item"><CheckCircle className="icon" /><div><strong>Work created before formal PBSC-OSI approval</strong> under my personal account was exploratory/proof-of-concept</div></div>
                <div className="check-item"><CheckCircle className="icon" /><div><strong>Work created after approval</strong> under the 0.25 FTE allocation will be under a new institutional GitHub account and is institutional property at inception/fork</div></div>
                <div className="check-item"><CheckCircle className="icon" /><div><strong>Open-source licensing</strong> ensures maximum educational impact while preserving PBSC's origination credit</div></div>
                <div className="check-item"><CheckCircle className="icon" /><div><strong>My professional recognition</strong> comes through attribution, conference presentations, consultation, and publications—not commercial ownership of assets</div></div>
              </div>
              <p className="small-italic">This model aligns with best practices in academic open-source development (e.g., MIT OpenCourseWare, Berkeley BOINC) where institutions gain prestige through freely shared innovations.</p>
            </div>
          </div>
        </section>

        <section className="cta-section page-section">
          <div className="container">
            <div className="section-title">
              <h2>Call to Action</h2>
              <p>This isn't a request for permission to experiment. This is an offer to formalize and scale something that already works, with PBSC's name on it from day one.</p>
            </div>
            <div className="bottom-line-box">
              <h3>Bottom Line</h3>
              <p>I'm offering to transfer significant completed work to PBSC in exchange for the institutional support needed to validate impact, secure grants, and scale this initiative. The four existing prototypes represent hundreds of hours of development—PBSC receives this foundation immediately, plus my ongoing work under the PBSC-OSI brand.</p>
              <div className="cta-button">This is PBSC's moment to lead.</div>
            </div>
            <div className="cta-grid">
              <div className="cta-card">
                <h3><CheckCircle className="icon" />Recommended Board Resolution</h3>
                <div className="resolution-box">
                  <p>"Palm Beach State College hereby establishes the <strong>Palm Beach State College Open Source Institute (PBSC-OSI)</strong> to develop, distribute, and support open-source educational games and resources that advance student learning and position PBSC as a national leader in educational innovation. The Institute is authorized to pursue grant funding and community collaboration in service of this mission."</p>
                </div>
              </div>
              <div className="cta-card">
                <h3><Users className="icon" />Phase 1 Staffing</h3>
                <div className="staffing-item">
                  <div className="staffing-title">Technical Coordinator (0.25 FTE)</div>
                  <div className="staffing-desc">Polish demos to commercial-grade, IRB coordination, faculty effectiveness studies</div>
                </div>
                <div className="staffing-total">
                  <div className="total-title">Total Phase 1: 0.25 FTE</div>
                  <div className="total-desc">Minimal investment, existing role adjustment</div>
                </div>
              </div>
            </div>
            <div className="next-steps-card">
              <h3>Immediate Next Steps</h3>
              <div className="steps-grid">
                <div className="step-item blue">
                  <div className="step-title">Week 1-2</div>
                  <ul><li>• Board review and resolution</li><li>• Legal framework consultation</li><li>• GitHub organization setup</li><li>• Marketing approval for branding</li></ul>
                </div>
                <div className="step-item green">
                  <div className="step-title">Month 1-2</div>
                  <ul><li>• Polish demos to commercial-grade</li><li>• IRB approval process</li><li>• Faculty pilot partnerships</li><li>• Launch opensource.palmbeachstate.edu</li></ul>
                </div>
                <div className="step-item yellow">
                  <div className="step-title">Month 3-6</div>
                  <ul><li>• Effectiveness studies</li><li>• First grant submissions</li><li>• Conference presentations</li><li>• Community building</li></ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-white">
          <div className="container contact-container">
            <div className="section-title">
              <h2>Questions? Let's Discuss.</h2>
              <p>This proposal represents months of development work already completed. The games are real, the model is proven, and the timing is right. Let's formalize this initiative and position PBSC for national leadership.</p>
            </div>
            <div className="contact-card">
              <div className="contact-avatar">JR</div>
              <h3>Jesse Rogers</h3>
              <p className="title">Math Learning Lab Coordinator</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <MapPin className="icon" />
                  <div>
                    <strong>Student Learning Center</strong>
                    <div className="small-text">3160 PGA Blvd, Palm Beach Gardens, FL 33410</div>
                    <div className="small-text">Mail Station #45 | BB209</div>
                  </div>
                </div>
                <div className="contact-detail"><Phone className="icon" /><a href="tel:561-207-5202">561.207.5202</a></div>
                <div className="contact-detail"><Mail className="icon" /><a href="mailto:rogersjj@pbsc.edu">rogersjj@pbsc.edu</a></div>
              </div>
            </div>
            <div className="contact-buttons">
              <a href="https://github.com/rogersmath" target="_blank" rel="noopener noreferrer" className="button secondary"><Github className="icon" />View Current Work</a>
              <a href="mailto:rogersjj@pbsc.edu?subject=PBSC-OSI Proposal Discussion" className="button primary"><Mail className="icon" />Email to Discuss</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <img src="https://www.palmbeachstate.edu/_resources/images/logo.jpg" alt="PBSC Logo" className="footer-logo" />
              <p>Palm Beach State College<br />Open Source Institute<br />Proposal </p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>Jesse Rogers</p>
              <p>Math Learning Lab Coordinator</p>
              <a href="mailto:rogersjj@pbsc.edu">rogersjj@pbsc.edu</a>
            </div>
            <div>
              <h4>Current Portfolio</h4>
              <ul><li>• SmileRun (Number Theory)</li><li>• Lightspeed Jump (Trigonometry)</li><li>• Spanish Learning Platform</li><li>• SLC Tutor Checklist</li></ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2025 Palm Beach State College • All Rights Reserved</div>
            <div className="confidential-footer"><Zap className="icon" />CONFIDENTIAL - INTERNAL USE ONLY</div>
          </div>
        </div>
      </footer>
    </div>
  );
}