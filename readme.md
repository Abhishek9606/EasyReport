# EasyReport

## Overview

EasyReport is a web-based report management platform designed to improve the traditional report submission workflow used in colleges.

In many academic environments, students repeatedly approach faculty members to understand report requirements, verify formatting rules, make corrections, and resubmit documents multiple times. This process is often fragmented, time-consuming, and dependent on continuous manual communication.

EasyReport aims to provide a centralized system where faculty members can define report requirements and students can access those requirements in a clear and structured manner before submitting their work.

The goal is not to automate report creation, but to reduce confusion and create a more organized submission and review process.

---

# Problem Statement

The traditional report submission workflow suffers from several challenges:

* Students often receive report guidelines through verbal instructions, PDFs, or classroom announcements.
* Report requirements vary from subject to subject.
* Students repeatedly approach faculty members to clarify formatting rules.
* Report templates are not always easily accessible.
* Faculty members spend significant time reviewing formatting issues rather than focusing on content quality.
* Tracking submissions and revisions becomes difficult, especially for group reports.

As a result, both students and faculty spend unnecessary time managing the report lifecycle.

---

# Proposed Solution

EasyReport provides a centralized portal consisting of two separate interfaces:

1. Student Dashboard
2. Faculty Dashboard

Both interfaces work together to streamline report creation, submission, review, and revision.

---

# Student Dashboard

The Student Dashboard allows students to access all information required to prepare and submit reports correctly.

## Features

### Subject Report List

Students can view all subjects that currently require report submissions.

Each subject entry contains:

* Subject name
* Report title
* Submission deadline
* Report type (Individual or Group)

---

### Report Guidelines

Faculty-defined report rules are displayed clearly.

Examples include:

* Chapter titles must use Times New Roman, size 12.
* Subsections must be left aligned.
* Every chapter must begin on a new page.
* Images must follow specific alignment requirements.
* Group photographs must be included at the end.
* The first two pages must be printed in color.
* Any additional subject-specific requirements.

These rules serve as the official reference for report preparation.

---

### Sample Report Template

Students can view or download an example report uploaded by the faculty.

The sample report provides a visual reference showing:

* Formatting style
* Layout structure
* Section organization
* Cover page design
* Overall presentation expectations

---

### Report Submission

Students can upload their completed reports directly through the system.

Submitted reports become available for faculty review.

---

### Group Report Information

For group reports, students can view:

* Maximum team size
* Group submission requirements
* Team member details

A single report submission represents the entire group.

---

# Faculty Dashboard

The Faculty View allows professors to define report requirements and review submissions.

---

## Create Report Requirement

Faculty members can create a new report assignment by providing:

### Basic Information

* Subject Name
* Report Title
* Submission Deadline

---

### Report Guidelines

Faculty can enter all formatting and submission rules that students must follow.

Examples include:

* Font specifications
* Heading styles
* Margin requirements
* Image placement rules
* Required sections
* Additional documentation requirements

---

### Sample Template Upload

Faculty can upload an example report that students can use as a reference.

---

### Report Type Selection

Faculty must select one of the following:

#### Individual Report

Each student submits their own report.

#### Group Report

A team submits a single report.

Additional configuration:

* Maximum number of members allowed per group
* Submission deadline

---

# Submission Review System

Faculty members can view all submitted reports.

Each submission contains:

* Student Name
* USN (University Seat Number)
* Report File
* Submission Time

For group reports:

* All member names
* All member USNs

---

# Review Actions

After reviewing a report, faculty members can assign one of the following statuses.

## Approved

The report satisfies all specified requirements.

The submission is considered complete.

---

## Reiterate

The report requires modifications.

Faculty members can provide:

* Formatting corrections
* Missing sections
* Structural changes
* Additional recommendations

Students can review the feedback, make corrections, and resubmit the report.

---

# MVP Scope

The MVP focuses on establishing the complete report management workflow using only:

* HTML
* CSS
* JavaScript

No frameworks will be used.

The objective is to validate the workflow and user experience before introducing advanced features.

---

# Landing Page

The application begins with a landing page explaining the purpose of the platform.

Suggested message:

## Tired of the Traditional Report Submission Process?

Students often spend hours clarifying formatting rules, searching for report templates, and repeatedly showing reports to faculty members for corrections.

ReportFlow provides a centralized platform where report requirements, templates, submissions, and feedback are managed in one place.

The goal is to make report preparation more organized, transparent, and efficient for both students and faculty members.

---



# Technology Stack

Frontend:

* HTML
* CSS
* JavaScript

Backend:

* To be decided

Database:

* To be decided

---

# Goal

The primary goal of EasyReport is to reduce ambiguity in report preparation and create a structured communication channel between students and faculty throughout the report submission process.



