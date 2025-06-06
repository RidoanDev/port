import {
  Download,
  Phone,
  MapPin,
  Linkedin,
  FileText,
  Award,
  ScrollText,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  UserCircle,
  School,
  BookOpen,
  Briefcase,
  FileBadge,
  Code,
  HeartHandshake,
  Mail,
  Share2,
} from 'lucide-react';
import { Element, scroller } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import { cn } from './lib/utils';

// Import components
import CertificateSlider from './components/CertificateSlider';
import Navigation from './components/Navigation';
import LiveChat from './components/LiveChat';
import Courses from './components/Courses';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Information from './components/Information';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [age, setAge] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGhostOpen, setIsGhostOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2007-12-31');
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      setAge(age);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 86400000); // Update age daily
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const isScrollingUp = touchY < touchStartY - 10;

      if (isScrollingUp && document.activeElement?.tagName === 'INPUT') {
        return;
      }
      setIsMenuOpen(false);
      setIsGhostOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setIsGhostOpen(false);
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      smooth: true,
      offset: -64,
    });
    setActiveSection(section);
  };

  const content = {
    en: {
      name: 'Md Ridoan Mahmud Zisan',
      role: 'Student | Volunteer | Web Application Developer',
      statement:
        'As a dedicated student and volunteer, I aim to use my academic knowledge and interpersonal skills to contribute to educational and social initiatives. I seek opportunities for growth, collaboration, and positive impact while upholding integrity, empathy, and excellence.',
      downloadCV: 'Download Resume',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      certificates: 'Certificates',
      contact: 'Contact',
      achievements: 'Achievements',
      certifications: 'Certifications',
      volunteerWork: 'Volunteer Work',
      languages: 'Language Skills',
      computerSkills: 'Computer Skills',
      adminSkills: 'Administrative Skills',
      family: 'Family & Personal Info',
      age: 'Age',
      years: 'years',
      sections: {
        profile: 'Profile',
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills & Competencies',
        certificates: 'Certificates',
        contact: 'Contact',
        family: 'Family & Personal',
        share: 'Share',
      },
    },
    bn: {
      name: 'মো: রিদওয়ান মাহমুদ জিসান',
      role: 'শিক্ষার্থী | স্বেচ্ছাসেবী | ওয়েব এপ্লিকেশন ডেভলপার',
      statement:
        'একজন নিবেদিতপ্রাণ ছাত্র এবং স্বেচ্ছাসেবক হিসেবে, আমি আমার একাডেমিক জ্ঞান এবং আন্তঃব্যক্তিক দক্ষতা ব্যবহার করে শিক্ষাগত এবং সামাজিক উদ্যোগে অবদান রাখার লক্ষ্য রাখি। আমি সততা, সহানুভূতি এবং শ্রেষ্ঠত্ব বজায় রেখে বৃদ্ধি, সহযোগিতা এবং ইতিবাচক প্রভাবের সুযোগ খুঁজি।',
      downloadCV: 'জীবনবৃত্তান্ত ডাউনলোড করুন',
      education: 'শিক্ষা',
      experience: 'অভিজ্ঞতা',
      skills: 'দক্ষতা',
      certificates: 'সার্টিফিকেট',
      contact: 'যোগাযোগ',
      achievements: 'অর্জন',
      certifications: 'সার্টিফিকেট',
      volunteerWork: 'স্বেচ্ছাসেবী কাজ',
      languages: 'ভাষার দক্ষতা',
      computerSkills: 'কম্পিউটার দক্ষতা',
      adminSkills: 'প্রশাসনিক দক্ষতা',
      family: 'পারিবারিক ও ব্যক্তিগত তথ্য',
      age: 'বয়স',
      years: 'বছর',
      sections: {
        profile: 'প্রোফাইল',
        education: 'শিক্ষা',
        experience: 'অভিজ্ঞতা',
        skills: 'দক্ষতা ও যোগ্যতা',
        certificates: 'সার্টিফিকেট',
        contact: 'যোগাযোগ',
        family: 'পারিবারিক তথ্য',
        share: 'শেয়ার',
      },
    },
  };

  const navigationItems = [
    {
      id: 'profile',
      icon: <UserCircle size={22} className="text-indigo-500" />,
      title: 'Profile',
    },
    {
      id: 'education',
      icon: <School size={22} className="text-blue-500" />,
      title: 'Education',
    },
    {
      id: 'courses',
      icon: <BookOpen size={22} className="text-emerald-500" />,
      title: 'Courses',
    },
    {
      id: 'experience',
      icon: <Briefcase size={22} className="text-amber-500" />,
      title: 'Experience',
    },
    {
      id: 'certificates',
      icon: <FileBadge size={22} className="text-red-500" />,
      title: 'Certificates',
    },
    {
      id: 'skills',
      icon: <Code size={22} className="text-purple-500" />,
      title: 'Skills',
    },
    {
      id: 'family',
      icon: <HeartHandshake size={22} className="text-pink-500" />,
      title: 'Family',
    },
    {
      id: 'contact',
      icon: <Mail size={22} className="text-cyan-500" />,
      title: 'Contact',
    },
    {
      id: 'share',
      icon: <Share2 size={22} className="text-teal-500" />,
      target: 'social-links',
      title: 'Share',
    },
  ];

  const certificates = [
    // High-Demand Tech Skills
    {
      title: {
        en: "Introduction to Artificial Intelligence",
        bn: "কৃত্রিম বুদ্ধিমত্তার ভূমিকা"
      },
      image: "https://i.postimg.cc/VsZdZ25P/introduction-to-artificial-intelligence.png"
    },
    {
      title: {
        en: "Introduction to Cyber Security",
        bn: "সাইবার সিকিউরিটি পরিচিতি"
      },
      image: "https://i.postimg.cc/RZKhFFdv/introduction-to-cyber-security.png"
    },
    {
      title: {
        en: "Introduction to Python",
        bn: "পাইথনের পরিচিতি"
      },
      image: "https://i.postimg.cc/L6qhcvZY/Introduction-to-Python.jpg"
    },
    {
      title: {
        en: "Machine Learning",
        bn: "মেশিন লার্নিং"
      },
      image: "https://i.postimg.cc/mrSrY5Kq/machine-learning.png"
    },
    {
      title: {
        en: "Complete Web Development",
        bn: "সম্পূর্ণ ওয়েব ডেভেলপমেন্ট"
      },
      image: "https://i.postimg.cc/gkr6Ym10/Complete-Web-Development.png"
    },
    {
      title: {
        en: "Digital Marketing",
        bn: "ডিজিটাল মার্কেটিং"
      },
      image: "https://i.postimg.cc/XvKr2JBs/digital-marketing.png"
    },
    // Sustainability & Global Issues
    {
      title: {
        en: "Introduction to Sustainable Development in Practice",
        bn: "অনুশীলনে টেকসই উন্নয়নের ভূমিকা"
      },
      image: "https://i.postimg.cc/tCL7pPhr/Introduction-to-Sustainable-Development-in-Practice.jpg"
    },
    {
      title: {
        en: "Gender equality and human rights in climate action and renewable energy",
        bn: "জলবায়ু কর্ম ও নবায়নযোগ্য শক্তিতে লিঙ্গ সমতা ও মানবাধিকার"
      },
      image: "https://i.postimg.cc/V6Dd8VRM/Gender-equality-and-human-rights-in-climate-action-and-renewable-energy.jpg"
    },
    {
      title: {
        en: "Net Zero 101- What, Why and How",
        bn: "নেট জিরো ১০১: কি, কেন এবং কিভাবে"
      },
      image: "https://i.postimg.cc/ZR7Kgybx/Net-Zero-101-What-Why-and-How.jpg"
    },
    {
      title: {
        en: "The UN Climate Change process",
        bn: "জাতিসংঘের জলবায়ু পরিবর্তন প্রক্রিয়া"
      },
      image: "https://i.postimg.cc/zv4DDZRL/The-UN-Climate-Change-process.jpg"
    },
    // Academic & Professional Development
    {
      title: {
        en: "Bangladesh Mathematical Olympiad",
        bn: "বাংলাদেশ গণিত অলিম্পিয়াড"
      },
      image: "https://i.postimg.cc/pLFhFkWb/Bangladesh-Mathematical-Olympiad.png"
    },
    {
      title: {
        en: "Business Case Solving Certificate",
        bn: "ব্যবসায়িক কেস সমাধান সার্টিফিকেট"
      },
      image: "https://i.postimg.cc/4y27zSHZ/Business-Case-Solving-Certificate.png"
    },
    // Professional Skills
    {
      title: {
        en: "Presentation and Public Speaking",
        bn: "প্রেজেন্টেশন ও পাবলিক স্পিকিং"
      },
      image: "https://i.postimg.cc/VvJLcL5Q/Presentation-and-Public-Speaking.png"
    },
    {
      title: {
        en: "CV writing and interview",
        bn: "সিভি লেখা ও ইন্টারভিউ প্রস্তুতি"
      },
      image: "https://i.postimg.cc/cJGKMYCK/CV-writing-and-interview.jpg"
    },
    {
      title: {
        en: "Basic of management",
        bn: "ম্যানেজমেন্টের মৌলিক বিষয়"
      },
      image: "https://i.postimg.cc/0jyKKsQc/Basic-of-management.jpg"
    },
    {
      title: {
        en: "Money management",
        bn: "টাকা ব্যবস্থাপনা"
      },
      image: "https://i.postimg.cc/fLTRBvNb/Money-management.jpg"
    },
    {
      title: {
        en: "Corporate etiquette",
        bn: "ক cooperate শিষ্টাচার"
      },
      image: "https://i.postimg.cc/vHjxTCdt/Corporate-etiquette.jpg"
    },
    {
      title: {
        en: "Communication hacks",
        bn: "যোগাযোগ কৌশল"
      },
      image: "https://i.postimg.cc/dQ5yPLHX/Communication-hacks.jpg"
    },
    {
      title: {
        en: "Microsoft Office Starter Course Certificate",
        bn: "মাইক্রোসফ্ট অফিস প্রাথমিক কোর্স সার্টিফিকেট"
      },
      image: "https://i.postimg.cc/bvPJ2hVk/Microsoft-Office-Starter-Course-Certificate.png"
    },
    {
      title: {
        en: "Email Writing Certificate",
        bn: "ইমেইল লেখার সার্টিফিকেট"
      },
      image: "https://i.postimg.cc/fLwJ1NxD/Email-Writing-Certificate.png"
    },
    // Language Proficiency
    {
      title: {
        en: "English for Everyday Certificate",
        bn: "দৈনন্দিন ইংরেজি সার্টিফিকেট"
      },
      image: "https://i.postimg.cc/nrrMcGRW/English-for-Everyday-Certificate.png"
    },
    {
      title: {
        en: "Academic English grammar",
        bn: "একাডেমিক ইংরেজি ব্যাকরণ"
      },
      image: "https://i.postimg.cc/qRLC7RkN/Academic-English-grammar.jpg"
    },
    {
      title: {
        en: "IELTS mock test solution",
        bn: "আইইএলটিএস মক টেস্ট সমাধান"
      },
      image: "https://i.postimg.cc/L5W5qgG8/IELTS-mock-test-solution.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation
        navigationItems={navigationItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        language={language}
        setLanguage={setLanguage}
      />

      <Element name="profile">
        <div className="fixed top-4 right-4 z-50">
          <LiveChat />
        </div>

        <header className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center gap-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/75 to-blue-500/75 rounded-full blur-xl opacity-75"></div>
                <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
                <img
                  src="https://github.com/RidoanDev.png"
                  alt="Md Ridoan Mahmud Zisan"
                  className="w-56 h-56 rounded-full border-4 border-white/20 shadow-2xl relative z-10"
                />
              </div>

              <div className="text-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                    {content[language].name}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-slate-200">
                    {content[language].role}
                  </p>
                  <p className="text-lg max-w-2xl mx-auto mb-8 text-slate-300 leading-relaxed">
                    {content[language].statement}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/Resume.pdf"
                    download="Md Ridoan Mahmud Zisan.pdf"
                    className="px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl bg-white text-slate-900 hover:bg-slate-100"
                  >
                    <Download size={20} />
                    {content[language].downloadCV}
                  </a>
                  <button
                    onClick={() => scrollToSection('certificates')}
                    className="px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  >
                    <ScrollText size={20} />
                    {content[language].certifications}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Element>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          <Element name="education">
            <Education language={language} />
          </Element>

          <Element name="courses">
            <Courses language={language} />
          </Element>

          <Element name="experience">
            <Experience language={language} />
          </Element>

          <Element name="certificates">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-700">
                <FileText />
                {content[language].certifications}
              </h2>
              <CertificateSlider
                certificates={certificates}
                language={language}
              />
            </div>
          </Element>

          <Element name="skills">
            <Skill language={language} />
          </Element>

          <Element name="information">
            <Information language={language} age={age} />
          </Element>

          <Element name="contact">
            <Contact language={language} />
          </Element>
        </div>
      </main>

      <Element name="footer">
        <Footer
          language={language}
          scrollToSection={scrollToSection}
          content={content}
        />
      </Element>

      <div
        className="fixed bottom-6 right-6 flex flex-col items-end gap-2"
        ref={containerRef}
      >
        {isMenuOpen && (
          <>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  );
                isMobile
                  ? (window.location.href = 'mailto:ridoan.zisan@gmail.com')
                  : window.open(
                      'https://mail.google.com/mail/?view=cm&fs=1&to=ridoan.zisan@gmail.com',
                      '_blank'
                    );
                setIsMenuOpen(false);
              }}
              className="bg-green-500 text-white p-4 rounded-full shadow-md hover:bg-green-600 transition-colors"
              title="Send Email"
            >
              <Mail size={24} />
            </a>
            <button
              onClick={() => {
                setIsChatOpen(true);
                setIsMenuOpen(false);
              }}
              className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600 transition-colors"
              title="Open Chat"
            >
              <Ghost size={24} />
            </button>
          </>
        )}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-4 rounded-full shadow-md ${
            isMenuOpen
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white transition-colors`}
          title={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <Mail size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;