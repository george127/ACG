import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style/AdminDashboard.css"

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  
  // Sample data for demonstration
  const sampleStudents = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", courses: 3, status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321", courses: 2, status: "active" },
    { id: 3, name: "Robert Johnson", email: "robert@example.com", phone: "555-123-4567", courses: 1, status: "inactive" },
    { id: 4, name: "Emily Davis", email: "emily@example.com", phone: "444-987-6543", courses: 4, status: "active" },
    { id: 5, name: "Michael Wilson", email: "michael@example.com", phone: "333-555-7777", courses: 2, status: "active" },
    { id: 6, name: "Sarah Brown", email: "sarah@example.com", phone: "222-444-6666", courses: 1, status: "pending" },
  ];
  
  const sampleCourses = [
    { id: 1, name: "Web Development", students: 25, status: "active" },
    { id: 2, name: "Data Science", students: 18, status: "active" },
    { id: 3, name: "UX Design", students: 12, status: "active" },
    { id: 4, name: "Mobile App Development", students: 15, status: "upcoming" },
    { id: 5, name: "Cloud Computing", students: 10, status: "active" },
    { id: 6, name: "Cybersecurity", students: 8, status: "upcoming" },
  ];
  
  const samplePayments = [
    { id: 1, student: "John Doe", amount: 299, date: "2023-10-15", status: "completed" },
    { id: 2, student: "Jane Smith", amount: 199, date: "2023-10-16", status: "completed" },
    { id: 3, student: "Robert Johnson", amount: 349, date: "2023-10-17", status: "pending" },
    { id: 4, student: "Emily Davis", amount: 249, date: "2023-10-18", status: "completed" },
    { id: 5, student: "Michael Wilson", amount: 299, date: "2023-10-19", status: "completed" },
    { id: 6, student: "Sarah Brown", amount: 199, date: "2023-10-20", status: "failed" },
  ];

  return (
    <div className="d-flex admin-dashboard">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h3>Admin Panel</h3>
          <p>Welcome, Admin</p>
        </div>
        
        <ul className="admin-nav">
          <li className={`admin-nav-item ${activeSection === "overview" ? "active" : ""}`}>
            <button onClick={() => setActiveSection("overview")}>
              <i className="bi bi-speedometer2 me-2"></i>
              Overview
            </button>
          </li>
          
          <li className={`admin-nav-item ${activeSection === "students" ? "active" : ""}`}>
            <button onClick={() => setActiveSection("students")}>
              <i className="bi bi-people me-2"></i>
              Students
            </button>
          </li>
          
          <li className={`admin-nav-item ${activeSection === "courses" ? "active" : ""}`}>
            <button onClick={() => setActiveSection("courses")}>
              <i className="bi bi-book me-2"></i>
              Courses
            </button>
          </li>
          
          <li className={`admin-nav-item ${activeSection === "payments" ? "active" : ""}`}>
            <button onClick={() => setActiveSection("payments")}>
              <i className="bi bi-credit-card me-2"></i>
              Payments
            </button>
          </li>
          
          <li className={`admin-nav-item ${activeSection === "reports" ? "active" : ""}`}>
            <button onClick={() => setActiveSection("reports")}>
              <i className="bi bi-bar-chart me-2"></i>
              Reports
            </button>
          </li>
          
          <li className={`admin-nav-item ${activeSection === "settings" ? "active" : ""}`}>
            <button onClick={() => setActiveSection("settings")}>
              <i className="bi bi-gear me-2"></i>
              Settings
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="admin-main-content">
        <div className="admin-header">
          <h2>
            {activeSection === "overview" && "Dashboard Overview"}
            {activeSection === "students" && "Student Management"}
            {activeSection === "courses" && "Course Management"}
            {activeSection === "payments" && "Payment Management"}
            {activeSection === "reports" && "Reports & Analytics"}
            {activeSection === "settings" && "System Settings"}
          </h2>
          
          <div className="admin-actions">
            <div className="search-bar">
              <i className="bi bi-search search-icon"></i>
              <input type="text" placeholder="Search students, courses, payments..." />
            </div>
            <button className="btn btn-primary">
              <i className="bi bi-arrow-clockwise me-1"></i>
              Refresh Data
            </button>
          </div>
        </div>

        {/* Content based on active section */}
        <div className="admin-content">
          {activeSection === "overview" && (
            <DashboardOverview 
              students={sampleStudents} 
              courses={sampleCourses} 
              payments={samplePayments} 
            />
          )}
          
          {activeSection === "students" && (
            <StudentManagement 
              students={sampleStudents} 
            />
          )}
          
          {activeSection === "courses" && (
            <CourseManagement 
              courses={sampleCourses} 
            />
          )}
          
          {activeSection === "payments" && (
            <PaymentManagement 
              payments={samplePayments} 
            />
          )}
          
          {activeSection === "reports" && (
            <ReportsAnalytics />
          )}
          
          {activeSection === "settings" && (
            <SystemSettings />
          )}
        </div>
      </div>
    </div>
  );
};

// Component for Dashboard Overview
const DashboardOverview = ({ students, courses, payments }) => {
  const totalRevenue = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const pendingPayments = payments.filter(payment => payment.status === 'pending').length;
  const completedPayments = payments.filter(payment => payment.status === 'completed').length;
  
  return (
    <div className="overview-container">
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="stat-card">
            <div className="stat-icon students">
              <i className="bi bi-people"></i>
            </div>
            <div className="stat-content">
              <h3>{students.length}</h3>
              <p>Total Students</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="stat-card">
            <div className="stat-icon courses">
              <i className="bi bi-book"></i>
            </div>
            <div className="stat-content">
              <h3>{courses.length}</h3>
              <p>Active Courses</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="stat-card">
            <div className="stat-icon revenue">
              <i className="bi bi-currency-dollar"></i>
            </div>
            <div className="stat-content">
              <h3>${totalRevenue.toFixed(2)}</h3>
              <p>Total Revenue</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="stat-card">
            <div className="stat-icon pending">
              <i className="bi bi-clock-history"></i>
            </div>
            <div className="stat-content">
              <h3>{pendingPayments}</h3>
              <p>Pending Payments</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="chart-card">
            <h4>Revenue Overview</h4>
            <div className="chart-placeholder">
              <div className="revenue-summary">
                <p><strong>Total Revenue:</strong> ${totalRevenue.toFixed(2)}</p>
                <p><strong>Completed Payments:</strong> {completedPayments}</p>
                <p><strong>Pending Payments:</strong> {pendingPayments}</p>
                <p><strong>Average Payment:</strong> ${(totalRevenue / completedPayments).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="chart-card">
            <h4>Student Distribution</h4>
            <div className="chart-placeholder">
              <div className="student-summary">
                <p><strong>Active Students:</strong> {students.filter(s => s.status === 'active').length}</p>
                <p><strong>Inactive Students:</strong> {students.filter(s => s.status === 'inactive').length}</p>
                <p><strong>Pending Approval:</strong> {students.filter(s => s.status === 'pending').length}</p>
                <p><strong>Avg Courses/Student:</strong> {(students.reduce((sum, student) => sum + student.courses, 0) / students.length).toFixed(1)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="chart-card">
            <h4>Recent Activity</h4>
            <div className="activity-list">
              <div className="activity-item">
                <i className="bi bi-person-plus text-success"></i>
                <div className="activity-content">
                  <p>New student registration: Emily Davis</p>
                  <small>2 hours ago</small>
                </div>
              </div>
              <div className="activity-item">
                <i className="bi bi-currency-dollar text-primary"></i>
                <div className="activity-content">
                  <p>Payment received from John Doe: $299.00</p>
                  <small>5 hours ago</small>
                </div>
              </div>
              <div className="activity-item">
                <i className="bi bi-book text-info"></i>
                <div className="activity-content">
                  <p>New course published: Cybersecurity</p>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for Student Management
const StudentManagement = ({ students }) => {
  return (
    <div className="management-container">
      <div className="management-header">
        <h3>Student Management</h3>
        <button className="btn btn-success">
          <i className="bi bi-plus-circle me-1"></i>
          Add New Student
        </button>
      </div>

      <div className="management-stats mb-4">
        <div className="row">
          <div className="col-md-3">
            <div className="stat-small">
              <h4>{students.length}</h4>
              <p>Total Students</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-small">
              <h4>{students.filter(s => s.status === 'active').length}</h4>
              <p>Active Students</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-small">
              <h4>{students.filter(s => s.status === 'inactive').length}</h4>
              <p>Inactive Students</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-small">
              <h4>{students.reduce((sum, student) => sum + student.courses, 0)}</h4>
              <p>Total Enrollments</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Courses</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.courses}</td>
                <td>
                  <span className={`badge ${student.status === 'active' ? 'bg-success' : student.status === 'inactive' ? 'bg-warning' : 'bg-secondary'}`}>
                    {student.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary me-1" title="Edit Student">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-sm btn-info me-1" title="View Details">
                    <i className="bi bi-eye"></i>
                  </button>
                  <button className="btn btn-sm btn-danger" title="Delete Student">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="management-footer mt-3">
        <p>Showing {students.length} students</p>
        <nav aria-label="Student pagination">
          <ul className="pagination">
            <li className="page-item disabled"><span className="page-link">Previous</span></li>
            <li className="page-item active"><span className="page-link">1</span></li>
            <li className="page-item"><span className="page-link">2</span></li>
            <li className="page-item"><span className="page-link">3</span></li>
            <li className="page-item"><span className="page-link">Next</span></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Component for Course Management
const CourseManagement = ({ courses }) => {
  return (
    <div className="management-container">
      <div className="management-header">
        <h3>Course Catalog</h3>
        <button className="btn btn-success">
          <i className="bi bi-plus-circle me-1"></i>
          Create New Course
        </button>
      </div>

      <div className="management-stats mb-4">
        <div className="row">
          <div className="col-md-3">
            <div className="stat-small">
              <h4>{courses.length}</h4>
              <p>Total Courses</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-small">
              <h4>{courses.filter(c => c.status === 'active').length}</h4>
              <p>Active Courses</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-small">
              <h4>{courses.filter(c => c.status === 'upcoming').length}</h4>
              <p>Upcoming Courses</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-small">
              <h4>{courses.reduce((sum, course) => sum + course.students, 0)}</h4>
              <p>Total Enrollments</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Enrolled Students</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.students}</td>
                <td>
                  <span className={`badge ${course.status === 'active' ? 'bg-success' : 'bg-info'}`}>
                    {course.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary me-1" title="Edit Course">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-sm btn-info me-1" title="View Details">
                    <i className="bi bi-eye"></i>
                  </button>
                  <button className="btn btn-sm btn-warning me-1" title="Manage Content">
                    <i className="bi bi-folder"></i>
                  </button>
                  <button className="btn btn-sm btn-danger" title="Delete Course">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="management-footer mt-3">
        <p>Showing {courses.length} courses</p>
        <nav aria-label="Course pagination">
          <ul className="pagination">
            <li className="page-item disabled"><span className="page-link">Previous</span></li>
            <li className="page-item active"><span className="page-link">1</span></li>
            <li className="page-item"><span className="page-link">2</span></li>
            <li className="page-item"><span className="page-link">Next</span></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Component for Payment Management
const PaymentManagement = ({ payments }) => {
  const totalRevenue = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const completedPayments = payments.filter(p => p.status === 'completed');
  const pendingPayments = payments.filter(p => p.status === 'pending');
  
  return (
    <div className="management-container">
      <div className="management-header">
        <h3>Payment Management</h3>
        <button className="btn btn-success">
          <i className="bi bi-plus-circle me-1"></i>
          Record Manual Payment
        </button>
      </div>

      <div className="management-stats mb-4">
        <div className="row">
          <div className="col-md-3">
            <div className="stat-small">
              <h4>${totalRevenue.toFixed(2)}</h4>
              <p>Total Revenue</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-small">
              <h4>{completedPayments.length}</h4>
              <p>Completed Payments</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-small">
              <h4>{pendingPayments.length}</h4>
              <p>Pending Payments</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-small">
              <h4>${(totalRevenue / completedPayments.length).toFixed(2)}</h4>
              <p>Average Payment</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Student</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.id}>
                <td>{payment.student}</td>
                <td>${payment.amount}</td>
                <td>{payment.date}</td>
                <td>
                  <span className={`badge ${
                    payment.status === 'completed' ? 'bg-success' : 
                    payment.status === 'pending' ? 'bg-warning' : 'bg-danger'
                  }`}>
                    {payment.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary me-1" title="View Details">
                    <i className="bi bi-eye"></i>
                  </button>
                  <button className="btn btn-sm btn-info me-1" title="Download Invoice">
                    <i className="bi bi-receipt"></i>
                  </button>
                  {payment.status === 'pending' && (
                    <button className="btn btn-sm btn-success" title="Approve Payment">
                      <i className="bi bi-check-circle"></i>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="management-footer mt-3">
        <p>Showing {payments.length} payments</p>
        <nav aria-label="Payment pagination">
          <ul className="pagination">
            <li className="page-item disabled"><span className="page-link">Previous</span></li>
            <li className="page-item active"><span className="page-link">1</span></li>
            <li className="page-item"><span className="page-link">2</span></li>
            <li className="page-item"><span className="page-link">3</span></li>
            <li className="page-item"><span className="page-link">Next</span></li>
          </ul>
        </nav>
      </div>
    </div>
  ); 
};  

// Placeholder components for other sections
const ReportsAnalytics = () => (  
  <div className="management-container">
    <h3>Reports & Analytics</h3>
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="chart-card">
          <h4>Enrollment Trends</h4>
          <div className="chart-placeholder">
            <div className="report-summary">
              <p>Monthly enrollment growth: <strong>+15%</strong></p>
              <p>Most popular course: <strong>Web Development</strong></p>
              <p>Peak enrollment period: <strong>September</strong></p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="chart-card">
          <h4>Revenue by Course</h4>
          <div className="chart-placeholder">
            <div className="report-summary">
              <p>Highest revenue: <strong>Data Science - $5,382</strong></p>
              <p>Fastest growing: <strong>Cloud Computing - +22%</strong></p>
              <p>Average revenue per course: <strong>$3,245</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="chart-card">
          <h4>Monthly Performance</h4>
          <div className="chart-placeholder large">
            <div className="performance-metrics">
              <div className="row">
                <div className="col-md-3">
                  <div className="metric">
                    <h5>Conversion Rate</h5>
                    <p className="text-success">24.5%</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric">
                    <h5>Student Retention</h5>
                    <p className="text-primary">78.3%</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric">
                    <h5>Course Completion</h5>
                    <p className="text-info">65.8%</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric">
                    <h5>Satisfaction Score</h5>
                    <p className="text-warning">4.7/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SystemSettings = () => (
  <div className="management-container">
    <h3>System Settings</h3>
    <div className="row">
      <div className="col-md-6">
        <div className="settings-card">
          <h5>General Settings</h5>
          <div className="settings-item">
            <label>Institute Name</label>
            <input type="text" className="form-control" defaultValue="AppCode Academy" />
          </div>
          <div className="settings-item">
            <label>Admin Email</label>
            <input type="email" className="form-control" defaultValue="admin@appcode.com" />
          </div>
          <div className="settings-item">
            <label>Institute Address</label>
            <textarea className="form-control" rows="3" defaultValue="123 Education Street, Knowledge City"></textarea>
          </div>
          <div className="settings-item">
            <label>Timezone</label>
            <select className="form-control">
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC+0 (Greenwich Mean Time)</option>
              <option>UTC+1 (Central European Time)</option>
            </select>
          </div>
          <button className="btn btn-primary mt-3">Save General Settings</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="settings-card">
          <h5>Payment Settings</h5>
          <div className="settings-item">
            <label>Currency</label>
            <select className="form-control">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>INR (₹)</option>
              <option>CAD (C$)</option>
            </select>
          </div>
          <div className="settings-item">
            <label>Tax Rate (%)</label>
            <input type="number" className="form-control" defaultValue="8.5" />
          </div>
          <div className="settings-item">
            <label>Payment Methods</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked id="creditCard" />
              <label className="form-check-label" htmlFor="creditCard">
                Credit/Debit Card
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked id="paypal" />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked id="bankTransfer" />
              <label className="form-check-label" htmlFor="bankTransfer">
                Bank Transfer
              </label>
            </div>
          </div>
          <div className="form-check settings-item">
            <input className="form-check-input" type="checkbox" defaultChecked id="enablePayments" />
            <label className="form-check-label" htmlFor="enablePayments">
              Enable Online Payments
            </label>
          </div>
          <button className="btn btn-primary mt-3">Save Payment Settings</button>
        </div>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-12">
        <div className="settings-card">
          <h5>System Information</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="system-info">
                <p><strong>Version:</strong> 2.1.0</p>
                <p><strong>Last Updated:</strong> October 15, 2023</p>
                <p><strong>Database:</strong> MongoDB 5.0</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="system-info">
                <p><strong>Server Status:</strong> <span className="text-success">Online</span></p>
                <p><strong>Uptime:</strong> 99.8%</p>
                <p><strong>Storage:</strong> 15.2GB/100GB used</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard;