import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

export default function Home() {
  return (
    <div className="nul-home">
      {/* Top bar */}
      <header className="nul-topbar">
        <div className="container d-flex align-items-center justify-content-between py-2">
          <div className="d-flex align-items-center gap-2">
            <div className="nul-logo">NUL</div>
            <div>
              <div className="nul-title">National University of Lesotho</div>
              <div className="nul-subtitle">
                Faculty of Mathematics &amp; Computer Science
              </div>
            </div>
          </div>
          <nav className="d-none d-md-flex gap-4 nul-nav">
            <a href="#about">About</a>
            <a href="#courses">Courses</a>
            <a href="#modules">Modules</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="d-flex gap-2">
            <a href="/login" className="btn btn-outline-light btn-sm">
              Login
            </a>
            <a href="/register" className="btn btn-light btn-sm nul-btn-accent">
              Register
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="nul-hero">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="nul-badge">Faculty Reporting System</span>
              <h1 className="nul-hero-title">
                Lecture reports, attendance &amp; ratings — in one place
              </h1>
              <p className="nul-hero-text">
                A streamlined platform for students, lecturers, principal
                lecturers and program leaders in the Department of
                Mathematics and Computer Science to record lectures, monitor
                attendance and give feedback.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href="/register" className="btn btn-lg nul-btn-primary">
                  Get started
                </a>
                <a href="#courses" className="btn btn-lg btn-outline-secondary">
                  View courses
                </a>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="nul-hero-card">
                <div className="nul-hero-card-row">
                  <span>Week of reporting</span>
                  <strong>Week 7</strong>
                </div>
                <div className="nul-hero-card-row">
                  <span>Attendance recorded</span>
                  <strong>38 / 42</strong>
                </div>
                <div className="nul-hero-card-row">
                  <span>Pending reports</span>
                  <strong>3</strong>
                </div>
                <div className="nul-hero-card-row">
                  <span>Average rating</span>
                  <strong>4.6 / 5</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="container py-5">
        <h2 className="nul-section-title">Programs offered</h2>
        <p className="nul-section-text">
          The department offers the following undergraduate programs:
        </p>
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="nul-card">
              <div className="nul-card-icon">CS</div>
              <h5>BSc Computer Science</h5>
              <p>
                Covers software development, algorithms, databases and
                systems analysis.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="nul-card">
              <div className="nul-card-icon">EE</div>
              <h5>BSc Engineering (Electronics)</h5>
              <p>
                Focuses on electronic circuits, embedded systems and signal
                processing.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="nul-card">
              <div className="nul-card-icon">EN</div>
              <h5>BSc Engineering (Networks)</h5>
              <p>
                Covers network design, infrastructure, security and
                communications systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules / roles */}
      <section id="modules" className="nul-modules">
        <div className="container py-5">
          <h2 className="nul-section-title">System modules</h2>
          <p className="nul-section-text">
            Access is tailored to four user roles across the faculty.
          </p>
          <div className="row g-4 mt-3">
            <div className="col-sm-6 col-lg-3">
              <div className="nul-role-card">
                <h6>Student</h6>
                <ul>
                  <li>Login / Register</li>
                  <li>Monitoring</li>
                  <li>Rating</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="nul-role-card">
                <h6>Lecturer</h6>
                <ul>
                  <li>Classes</li>
                  <li>Reports</li>
                  <li>Monitoring</li>
                  <li>Rating</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="nul-role-card">
                <h6>Principal Lecturer</h6>
                <ul>
                  <li>Courses</li>
                  <li>Reports &amp; feedback</li>
                  <li>Monitoring</li>
                  <li>Rating</li>
                  <li>Classes</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="nul-role-card">
                <h6>Program Leader</h6>
                <ul>
                  <li>Courses &amp; modules</li>
                  <li>Reports</li>
                  <li>Monitoring</li>
                  <li>Classes &amp; lectures</li>
                  <li>Rating</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="nul-footer">
        <div className="container py-4 d-flex flex-wrap justify-content-between align-items-center">
          <div>
            <strong>National University of Lesotho</strong>
            <div className="nul-subtitle">
              Department of Mathematics &amp; Computer Science
            </div>
          </div>
          <div className="nul-footer-text">
            &copy; {new Date().getFullYear()} NUL Faculty Reporter
          </div>
        </div>
      </footer>
    </div>
  );
}
