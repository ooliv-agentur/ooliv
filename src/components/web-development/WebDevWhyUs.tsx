import React from 'react';
import { Code2, Database, Server, TrendingUp, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevWhyUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-medico-lightGreen/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-4">
            Technische Exzellenz trifft Business-Verständnis
          </h2>
          <p className="text-xl text-medico-darkGreen/80 max-w-3xl mx-auto">
            Über 16 Jahre Full-Stack-Entwicklung – unterstützt von spezialisierten Tech-Experten
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Uli (50%) */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-medico-turquoise/20 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-medico-turquoise to-medico-darkGreen flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-medico-darkGreen mb-1">Uli Mayer</h3>
                <p className="text-lg text-medico-turquoise font-semibold mb-3">Ihr Entwicklungs-Lead</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-medico-turquoise flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-medico-darkGreen">16+ Jahre Full-Stack-Entwicklung</p>
                  <p className="text-sm text-medico-darkGreen/70">Von ersten PHP-Projekten bis zu modernen React-Apps</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-medico-turquoise flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-medico-darkGreen">150+ erfolgreiche Web-Projekte</p>
                  <p className="text-sm text-medico-darkGreen/70">B2B-Websites, Shops, Custom-Applikationen</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code2 className="w-6 h-6 text-medico-turquoise flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-medico-darkGreen">Von WordPress bis Custom Code</p>
                  <p className="text-sm text-medico-darkGreen/70">Die beste Technologie für Ihr Projekt</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-medico-turquoise/20">
              <p className="text-medico-darkGreen/80 italic">
                "Seit über 16 Jahren entwickle ich Websites, die technisch exzellent sind und Ihre Business-Ziele erreichen. Jedes Projekt ist anders – und verdient eine maßgeschneiderte Lösung."
              </p>
            </div>
          </div>

          {/* Right Column - Team (50%) */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-medico-turquoise/20 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-medico-darkGreen mb-6">
              Unterstützt von Tech-Spezialisten
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-medico-turquoise/10 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-medico-turquoise" />
                </div>
                <div>
                  <p className="font-semibold text-medico-darkGreen mb-1">Frontend Developer</p>
                  <p className="text-sm text-medico-darkGreen/70">React, Vue.js, Performance-Optimierung & moderne UI-Frameworks</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-medico-turquoise/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-medico-turquoise" />
                </div>
                <div>
                  <p className="font-semibold text-medico-darkGreen mb-1">Backend Developer</p>
                  <p className="text-sm text-medico-darkGreen/70">APIs, Datenbanken, Server-Infrastruktur & Systemintegration</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-medico-turquoise/10 flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-medico-turquoise" />
                </div>
                <div>
                  <p className="font-semibold text-medico-darkGreen mb-1">DevOps Engineer</p>
                  <p className="text-sm text-medico-darkGreen/70">Hosting, CI/CD, Security & Performance-Monitoring</p>
                </div>
              </div>
            </div>

            {/* Metrics Box */}
            <div className="bg-gradient-to-br from-medico-turquoise/10 to-medico-lightGreen/20 rounded-xl p-6 border border-medico-turquoise/20">
              <h4 className="text-lg font-bold text-medico-darkGreen mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-medico-turquoise" />
                Unsere Performance-Standards
              </h4>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-medico-turquoise mb-1">99.9%</p>
                  <p className="text-xs text-medico-darkGreen/70">Uptime-Garantie</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-medico-turquoise mb-1">&lt;2s</p>
                  <p className="text-xs text-medico-darkGreen/70">Ladezeit Ø</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-medico-turquoise mb-1">95%</p>
                  <p className="text-xs text-medico-darkGreen/70">Zufriedenheit</p>
                </div>
              </div>
            </div>

            <Link 
              to="/ueber-uns" 
              className="inline-block mt-6 text-medico-turquoise font-semibold hover:text-medico-darkGreen transition-colors"
            >
              Mehr über unser Team →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevWhyUs;
