#!/usr/bin/env python3
"""Generate 3 new PM101toPro PDF templates using fpdf2 (Helvetica, ASCII only)."""

from fpdf import FPDF
import os

OUT_DIR = "/workspace/pm101topro/public/downloads"
os.makedirs(OUT_DIR, exist_ok=True)

# ── colour palette ──────────────────────────────────────────────
BLUE   = (41, 98, 255)
DKBLUE = (20, 50, 130)
WHITE  = (255, 255, 255)
BLACK  = (30, 30, 30)
GRAY   = (100, 100, 100)
LGRAY  = (240, 240, 245)
VLGRAY = (248, 248, 250)
GREEN  = (0, 160, 80)
REDISH = (220, 50, 50)

# ── helpers ─────────────────────────────────────────────────────
def header_bar(pdf, label, w=190):
    """Draws a full-width coloured header bar."""
    pdf.set_fill_color(*BLUE)
    pdf.rect(10, pdf.get_y(), w, 9, style="F")
    pdf.set_text_color(*WHITE)
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_xy(15, pdf.get_y() + 1.2)
    pdf.cell(180, 7, label)
    pdf.set_text_color(*BLACK)
    pdf.ln(12)

def section_title(pdf, title):
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(*DKBLUE)
    pdf.cell(0, 7, title)
    pdf.set_text_color(*BLACK)
    pdf.ln(8)

def th_cell(pdf, w, label, bold=True):
    style = "B" if bold else ""
    pdf.set_font("Helvetica", style, 8)
    pdf.set_fill_color(*BLUE)
    pdf.set_text_color(*WHITE)
    pdf.cell(w, 7, label, border=0, align="C", fill=True)
    pdf.set_text_color(*BLACK)

def td_cell(pdf, w, label, align="C", fill=False):
    pdf.set_font("Helvetica", "", 8)
    if fill:
        pdf.set_fill_color(*LGRAY)
    else:
        pdf.set_fill_color(*WHITE)
    pdf.cell(w, 6.5, label, border=0, align=align, fill=True)

def td_cell_bold(pdf, w, label, align="C"):
    pdf.set_font("Helvetica", "B", 8)
    pdf.set_fill_color(*BLUE)
    pdf.set_text_color(*WHITE)
    pdf.cell(w, 7, label, border=0, align=align, fill=True)
    pdf.set_text_color(*BLACK)

def draw_table_header(pdf, cols, widths):
    pdf.set_font("Helvetica", "B", 8)
    pdf.set_fill_color(*BLUE)
    pdf.set_text_color(*WHITE)
    for i, col in enumerate(cols):
        pdf.cell(widths[i], 7, col, border=0, align="C", fill=True)
    pdf.set_text_color(*BLACK)
    pdf.ln()

def draw_table_row(pdf, data, widths, fill=False, bold=False):
    style = "B" if bold else ""
    pdf.set_font("Helvetica", style, 8)
    if fill:
        pdf.set_fill_color(*LGRAY)
    else:
        pdf.set_fill_color(*WHITE)
    for i, d in enumerate(data):
        pdf.cell(widths[i], 6.5, str(d), border=0, align="C", fill=True)
    pdf.ln()


# =====================================================================
# 1. BUDGET TRACKER TEMPLATE
# =====================================================================
def make_budget_tracker():
    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.add_page()
    pdf.set_auto_page_break(auto=True, margin=18)

    # Title
    pdf.set_font("Helvetica", "B", 20)
    pdf.set_text_color(*BLUE)
    pdf.cell(0, 10, "Budget Tracker")
    pdf.ln(4)
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*GRAY)
    pdf.cell(0, 5, "Track project spending against budget -- category by category")
    pdf.ln(10)

    # ── Project Info ──
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(*BLACK)
    pdf.cell(50, 6, "Project Name: ________________________________")
    pdf.cell(50, 6, "Period: ________________________________")
    pdf.ln(8)
    pdf.cell(50, 6, "Prepared by: ________________________________")
    pdf.cell(50, 6, "Date: ____________________")
    pdf.ln(12)

    # ── Budget Table ──
    cols = ["Category", "Budgeted ($)", "Actual ($)", "Variance ($)", "% Used"]
    widths = [38, 38, 38, 38, 38]

    draw_table_header(pdf, cols, widths)

    categories = [
        ("Labour", "50,000", "47,250", "2,750", "94.5%"),
        ("Materials", "25,000", "26,800", "-1,800", "107.2%"),
        ("Software", "12,000", "11,400", "600", "95.0%"),
        ("Travel", "8,000", "6,200", "1,800", "77.5%"),
        ("Training", "5,000", "5,000", "0", "100.0%"),
        ("Contingency", "15,000", "12,000", "3,000", "80.0%"),
        ("Misc", "5,000", "4,350", "650", "87.0%"),
    ]

    for i, (cat, bud, act, var, pct) in enumerate(categories):
        draw_table_row(pdf, [cat, bud, act, var, pct], widths, fill=(i % 2 == 1))

    # Totals row
    draw_table_row(pdf, ["TOTAL", "120,000", "113,000", "7,000", "94.2%"], widths, bold=True)

    pdf.ln(8)

    # ── Notes ──
    section_title(pdf, "Notes & Adjustments")
    pdf.set_font("Helvetica", "", 9)
    pdf.multi_cell(0, 5, "1. ___________________________________________________________________")
    pdf.ln(2)
    pdf.multi_cell(0, 5, "2. ___________________________________________________________________")
    pdf.ln(2)
    pdf.multi_cell(0, 5, "3. ___________________________________________________________________")
    pdf.ln(6)

    # ── Approval ──
    section_title(pdf, "Approval")
    pdf.set_font("Helvetica", "", 9)
    pdf.cell(70, 6, "Project Manager: ___________________________")
    pdf.cell(60, 6, "Date: ____________________")
    pdf.ln(7)
    pdf.cell(70, 6, "Sponsor: _________________________________")
    pdf.cell(60, 6, "Date: ____________________")

    path = os.path.join(OUT_DIR, "budget-tracker-template.pdf")
    pdf.output(path)
    print(f"  >> {path}")


# =====================================================================
# 2. STAKEHOLDER REGISTER TEMPLATE
# =====================================================================
def make_stakeholder_register():
    pdf = FPDF(orientation="L", unit="mm", format="A4")
    pdf.add_page()
    pdf.set_auto_page_break(auto=True, margin=15)

    # Title
    pdf.set_font("Helvetica", "B", 20)
    pdf.set_text_color(*BLUE)
    pdf.cell(0, 10, "Stakeholder Register")
    pdf.ln(4)
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*GRAY)
    pdf.cell(0, 5, "Identify and plan engagement for all project stakeholders")
    pdf.ln(10)

    # ── Project Info ──
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(*BLACK)
    pdf.cell(70, 6, "Project Name: ________________________________________")
    pdf.cell(60, 6, "Prepared by: ____________________")
    pdf.ln(8)
    pdf.cell(70, 6, "Date: ____________________")
    pdf.ln(10)

    # ── Stakeholder Table (landscape = 277mm usable) ──
    col_labels = ["Stakeholder Name", "Role", "Interest\n(L/M/H)", "Influence\n(L/M/H)",
                   "Engagement Strategy", "Status"]
    # Landscape width ~277, margins 10 each side = 257 usable
    widths = [48, 48, 28, 28, 70, 35]

    # Header with multi-line support
    pdf.set_font("Helvetica", "B", 8)
    pdf.set_fill_color(*BLUE)
    pdf.set_text_color(*WHITE)
    y_start = pdf.get_y()
    x_start = pdf.get_x()
    for i, col in enumerate(col_labels):
        pdf.set_xy(x_start + sum(widths[:i]), y_start)
        has_newline = "\n" in col
        if has_newline:
            lines = col.split("\n")
            pdf.cell(widths[i], 7, lines[0], border=0, align="C", fill=True)
            pdf.set_xy(x_start + sum(widths[:i]), y_start + 3.5)
            pdf.cell(widths[i], 7, lines[1], border=0, align="C", fill=True)
        else:
            pdf.cell(widths[i], 7, col, border=0, align="C", fill=True)
    pdf.set_text_color(*BLACK)
    pdf.set_y(y_start + 8)

    stakeholders = [
        ("Jane Chen", "Executive Sponsor", "L", "H",
         "Monthly steering committee briefings; involve in major decisions", "Active"),
        ("Mark Rivera", "Program Director", "L", "H",
         "Weekly one-on-ones; escalation point for issues", "Active"),
        ("Sarah Khan", "Product Owner", "H", "H",
         "Daily stand-ups; joint backlog grooming sessions", "Active"),
        ("Tom Briggs", "IT Operations Lead", "M", "M",
         "Weekly sync meetings; include in planning sessions", "Active"),
        ("Lisa Park", "Finance Controller", "L", "M",
         "Monthly budget reviews; timely variance reports", "Active"),
        ("David Osei", "End-User Rep", "H", "L",
         "Focus groups, UAT sessions, and feedback surveys", "Active"),
        ("Rachel Adams", "Compliance Officer", "M", "M",
         "Quarterly compliance check-ins; early risk flagging", "Watch"),
        ("Vendor Corp", "External Supplier", "M", "L",
         "Contract reviews per milestone; SLA monitoring", "Monitor"),
    ]

    for i, (name, role, interest, influence, strategy, status) in enumerate(stakeholders):
        y_before = pdf.get_y()
        # Calculate row height based on strategy text
        pdf.set_font("Helvetica", "", 8)
        strat_w = widths[4]
        text_lines = pdf.multi_cell(strat_w, 4.5, strategy, split_only=True)
        row_h = max(6.5, len(text_lines) * 4.5 + 1)
        # Check page break
        if pdf.get_y() + row_h > 190:
            pdf.add_page()
            # Redraw header
            pdf.set_font("Helvetica", "B", 8)
            pdf.set_fill_color(*BLUE)
            pdf.set_text_color(*WHITE)
            y_h = pdf.get_y()
            x_h = pdf.get_x()
            for j, col in enumerate(col_labels):
                pdf.set_xy(x_h + sum(widths[:j]), y_h)
                has_nl = "\n" in col
                if has_nl:
                    lines = col.split("\n")
                    pdf.cell(widths[j], 4, lines[0], border=0, align="C", fill=True)
                    pdf.set_xy(x_h + sum(widths[:j]), y_h + 3.5)
                    pdf.cell(widths[j], 4, lines[1], border=0, align="C", fill=True)
                else:
                    pdf.cell(widths[j], 7, col, border=0, align="C", fill=True)
            pdf.set_text_color(*BLACK)
            pdf.set_y(y_h + 8)
            y_before = pdf.get_y()

        fill = (i % 2 == 1)
        if fill:
            pdf.set_fill_color(*LGRAY)
        else:
            pdf.set_fill_color(*WHITE)

        pdf.rect(10, y_before, sum(widths), row_h, style="F")

        pdf.set_xy(10, y_before + 1)
        pdf.set_font("Helvetica", "", 8)
        pdf.cell(widths[0], 5, name, align="C")
        pdf.set_xy(10 + widths[0], y_before + 1)
        pdf.cell(widths[1], 5, role, align="C")
        pdf.set_xy(10 + widths[0] + widths[1], y_before + 1)
        pdf.cell(widths[2], 5, interest, align="C")
        pdf.set_xy(10 + widths[0] + widths[1] + widths[2], y_before + 1)
        pdf.cell(widths[3], 5, influence, align="C")
        # Strategy - multi_cell
        pdf.set_xy(10 + sum(widths[:4]), y_before + 1)
        pdf.multi_cell(widths[4], 4.5, strategy, align="C")
        pdf.set_xy(10 + sum(widths[:5]), y_before + 1)
        pdf.cell(widths[5], 5, status, align="C")

        new_y = max(y_before + row_h, pdf.get_y())
        pdf.set_y(new_y)

    pdf.ln(6)

    # ── Legend ──
    section_title(pdf, "Interest & Influence Key")
    pdf.set_font("Helvetica", "", 8)
    legend_data = [
        ("L = Low", "Minimal impact on or by the project. Keep informed via general communications."),
        ("M = Medium", "Moderate impact. Regular updates and targeted engagement."),
        ("H = High", "Significant impact. Proactive, personalised engagement and escalation path."),
    ]
    for label, desc in legend_data:
        pdf.set_font("Helvetica", "B", 8)
        pdf.cell(20, 5, label)
        pdf.set_font("Helvetica", "", 8)
        pdf.multi_cell(0, 5, desc)
        pdf.ln(1)

    path = os.path.join(OUT_DIR, "stakeholder-register-template.pdf")
    pdf.output(path)
    print(f"  >> {path}")


# =====================================================================
# 3. PROJECT CLOSURE TEMPLATE
# =====================================================================
def make_project_closure():
    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.add_page()
    pdf.set_auto_page_break(auto=True, margin=18)

    # Title
    pdf.set_font("Helvetica", "B", 20)
    pdf.set_text_color(*BLUE)
    pdf.cell(0, 10, "Project Closure Report")
    pdf.ln(4)
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*GRAY)
    pdf.cell(0, 5, "Formal project close-out document -- capture results, lessons, and final approvals")
    pdf.ln(10)

    # ── Project Identification ──
    section_title(pdf, "Project Identification")
    pdf.set_font("Helvetica", "", 9)
    pdf.cell(0, 6, "Project Name:    ______________________________________________________________")
    pdf.ln(7)
    pdf.cell(0, 6, "Project Code:     ______________________________________________________________")
    pdf.ln(7)
    pdf.cell(45, 6, "Project Manager:  ____________________")
    pdf.cell(45, 6, "Sponsor:         ____________________")
    pdf.cell(45, 6, "Closure Date:    ____________________")
    pdf.ln(10)

    # ── Actual vs Planned ──
    section_title(pdf, "Actual vs Planned Performance")
    pdf.set_font("Helvetica", "B", 9)
    metric_widths = [60, 40, 40, 40]
    draw_table_header(pdf, ["Metric", "Planned", "Actual", "Verdict"], metric_widths)

    metrics = [
        ("Scope (% delivered)", "100%", "98%", "On Track"),
        ("Time (days)", "120", "132", "Over -10%"),
        ("Budget ($)", "120,000", "113,000", "Under 5.8%"),
    ]
    for i, (m, p, a, v) in enumerate(metrics):
        draw_table_row(pdf, [m, p, a, v], metric_widths, fill=(i % 2 == 1))

    pdf.ln(8)

    # ── Deliverables Acceptance ──
    section_title(pdf, "Deliverables Acceptance")
    pdf.set_font("Helvetica", "B", 9)
    del_widths = [100, 30, 30]
    draw_table_header(pdf, ["Deliverable", "Accepted (Y/N)", "Notes"], del_widths)

    deliverables = [
        ("Project Charter", "Y", ""),
        ("Requirements Specification", "Y", ""),
        ("System Design Document", "Y", ""),
        ("Developed Software / Product", "Y", ""),
        ("Test Results & QA Report", "N", ""),
        ("User Documentation & Training", "Y", ""),
        ("Deployment / Go-Live Package", "Y", ""),
    ]
    for i, (d, acc, note) in enumerate(deliverables):
        draw_table_row(pdf, [d, acc, note], del_widths, fill=(i % 2 == 1))

    pdf.ln(8)

    # ── Lessons Learned ──
    section_title(pdf, "Lessons Learned")
    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(0, 6, "What went well:")
    pdf.ln(7)
    pdf.set_font("Helvetica", "", 9)
    pdf.multi_cell(0, 5, "______________________________________________________________________________")
    pdf.ln(2)
    pdf.multi_cell(0, 5, "______________________________________________________________________________")
    pdf.ln(2)
    pdf.multi_cell(0, 5, "______________________________________________________________________________")
    pdf.ln(4)

    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(0, 6, "What could be improved:")
    pdf.ln(7)
    pdf.set_font("Helvetica", "", 9)
    pdf.multi_cell(0, 5, "______________________________________________________________________________")
    pdf.ln(2)
    pdf.multi_cell(0, 5, "______________________________________________________________________________")
    pdf.ln(2)
    pdf.multi_cell(0, 5, "______________________________________________________________________________")
    pdf.ln(4)

    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(0, 6, "Recommendations for future projects:")
    pdf.ln(7)
    pdf.set_font("Helvetica", "", 9)
    pdf.multi_cell(0, 5, "______________________________________________________________________________")
    pdf.ln(2)
    pdf.multi_cell(0, 5, "______________________________________________________________________________")
    pdf.ln(4)

    # ── Outstanding Items ──
    section_title(pdf, "Outstanding Items / Handover")
    pdf.set_font("Helvetica", "B", 9)
    out_widths = [80, 50, 50]
    draw_table_header(pdf, ["Item Description", "Owner", "Target Resolution Date"], out_widths)

    outstanding = [
        ("Final QA report sign-off", "", ""),
        ("Knowledge transfer session", "", ""),
        ("", "", ""),
        ("", "", ""),
    ]
    for i, (item, owner, tgt) in enumerate(outstanding):
        draw_table_row(pdf, [item, owner, tgt], out_widths, fill=(i % 2 == 1))

    pdf.ln(8)

    # ── Final Approval ──
    section_title(pdf, "Final Approval Signatures")
    pdf.set_font("Helvetica", "", 9)

    # Approval boxes
    pdf.set_draw_color(*BLUE)
    pdf.set_line_width(0.4)
    box_h = 22
    box_w = 85
    gap = 10

    # PM box
    y_box = pdf.get_y()
    pdf.rect(10, y_box, box_w, box_h)
    pdf.set_xy(14, y_box + 2)
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(*DKBLUE)
    pdf.cell(0, 5, "Project Manager")
    pdf.set_text_color(*BLACK)
    pdf.set_xy(14, y_box + 8)
    pdf.set_font("Helvetica", "", 8)
    pdf.cell(0, 5, "Name: ______________________________")
    pdf.set_xy(14, y_box + 14)
    pdf.cell(0, 5, "Signature: ___________________  Date: _________")

    # Sponsor box
    pdf.rect(10 + box_w + gap, y_box, box_w, box_h)
    pdf.set_xy(10 + box_w + gap + 4, y_box + 2)
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(*DKBLUE)
    pdf.cell(0, 5, "Project Sponsor")
    pdf.set_text_color(*BLACK)
    pdf.set_xy(10 + box_w + gap + 4, y_box + 8)
    pdf.set_font("Helvetica", "", 8)
    pdf.cell(0, 5, "Name: ______________________________")
    pdf.set_xy(10 + box_w + gap + 4, y_box + 14)
    pdf.cell(0, 5, "Signature: ___________________  Date: _________")

    pdf.set_draw_color(*BLACK)

    path = os.path.join(OUT_DIR, "project-closure-template.pdf")
    pdf.output(path)
    print(f"  >> {path}")


# =====================================================================
# RUN
# =====================================================================
if __name__ == "__main__":
    print("Generating 3 new PM101toPro templates...")
    make_budget_tracker()
    make_stakeholder_register()
    make_project_closure()
    print("Done - 3 templates generated.")
