
    const groups = {
      "ABC AM / PM": [],
      "Boracay AM / PM": [],
      "Maldives AM / PM": [],
      "Maui AM / PM": [],
      "Striker AM / Graveyard PM": [],
      "Perimeter AM / PM": []
    };

    const startRef = new Date("2025-01-06"); // first Monday of the year
    const groupNames = Object.keys(groups);
    const today = new Date();
    let viewYear = today.getFullYear();
    let viewMonth = today.getMonth();

    const dateTodayDiv = document.querySelector(".date-today");
    const groupInfoDiv = document.querySelector(".group-info");
    const monthTitle = document.querySelector(".month-title");
    const tbody = document.getElementById("calendar-body");

    function updateHeader() {
      dateTodayDiv.textContent = today.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      // Determine current group for this week
      const weeksPassed = Math.floor((today - startRef) / (7 * 24 * 60 * 60 * 1000));
      const currentGroup = groupNames[weeksPassed % groupNames.length];
      groupInfoDiv.textContent = currentGroup;
    }

    function renderCalendar(year, month) {
      tbody.innerHTML = "";
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startDayOfWeek = (firstDay.getDay() + 6) % 7; // Monday start
      const totalDays = lastDay.getDate();

      monthTitle.textContent = `${firstDay.toLocaleString("en-US", { month: "long" })} ${year}`;

      let html = "<tr>";

      // Empty cells before the 1st
      for (let i = 0; i < startDayOfWeek; i++) {
        html += `<td class="empty"></td>`;
      }

      for (let day = 1; day <= totalDays; day++) {
        const currentDate = new Date(year, month, day);
        const isToday = currentDate.toDateString() === today.toDateString();

        // Determine which group applies to this week
        const weekOffset = Math.floor((currentDate - startRef) / (7 * 24 * 60 * 60 * 1000));
        const groupForDay = groupNames[weekOffset % groupNames.length];
        const cleaners = groups[groupForDay].join(", ");

        html += `
          <td class="${isToday ? "today" : ""}">
            <div class="date">${day}</div>
            <div class="group">${groupForDay}</div>
            <div>${cleaners}</div>
          </td>
        `;

        // New row every Sunday
        if ((startDayOfWeek + day) % 7 === 0) {
          html += "</tr><tr>";
        }
      }

      // Fill remaining cells
      const totalCells = startDayOfWeek + totalDays;
      const remaining = 7 - (totalCells % 7);
      if (remaining < 7) {
        for (let i = 0; i < remaining; i++) {
          html += `<td class="empty"></td>`;
        }
      }

      html += "</tr>";
      tbody.innerHTML = html;
    }

    document.getElementById("prevMonth").addEventListener("click", () => {
      viewMonth--;
      if (viewMonth < 0) {
        viewMonth = 11;
        viewYear--;
      }
      renderCalendar(viewYear, viewMonth);
    });

    document.getElementById("nextMonth").addEventListener("click", () => {
      viewMonth++;
      if (viewMonth > 11) {
        viewMonth = 0;
        viewYear++;
      }
      renderCalendar(viewYear, viewMonth);
    });

    // Initialize
    updateHeader();
    renderCalendar(viewYear, viewMonth);
 