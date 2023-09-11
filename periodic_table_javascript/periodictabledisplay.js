class PeriodicTableDisplay
{
	constructor(periodictable, tableid, infoboxbackgroundid, infoboxid)
	{
		this._periodictable = periodictable;
        this._tableid = tableid;

		this._periodictable.AddFilterChangedEventHandler(this._onFilterChanged);

		this._infobox = new PeriodicTableInfoBox(periodictable, infoboxbackgroundid, infoboxid);

		this._categoryClassMappings =
		{
			"Metal alcalino": "alkalimetal",
			"Alcalinot&eacute;rreo": "alkalineearthmetal",
			"Lant&aacute;nido": "lanthanide",
			"Act&iacute;nido": "actinide",
			"Metal en transición": "transitionmetal",
			"Metal bloque p": "posttransitionmetal",
			"Metaloide": "metalloid",
			"Reactivo no metal": "reactivenonmetal",
			"Gas Noble": "noblegas",
			"Desconocido": "unknown"
		}

		this._blockClassMappings =
		{
			"s": "sblock",
			"d": "dblock",
			"f": "fblock",
			"p": "pblock"
		}

		this._groupNames =
		{
			1: "Metal alcalino",
			2: "Alcalinotérreo",
			15: "Grupo del nitrógeno",
			16: "Anfígenos",
			17: "Haloógenos",
			18: "Gases nobles"
		};

		this._createCells();
		this._createColumnHeadings();
		this._createRowHeadings();
		this._populate();

		document.getElementById(this._tableid).addEventListener('click', event =>
		{
			let target = event.target;

			if(target.parentElement.classList.contains("elementcell"))
			{
				target = event.target.parentElement;
			}

			if(target.classList.contains("elementcell"))
			{
				this._infobox.Show(target.dataset.atomicnumber);
			}
		});
    }


	_onFilterChanged(changed)
	{
		let currentcell = null;

		for(let element of changed)
		{
			currentcell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);

			currentcell.classList.toggle("elementcellfaded");
		}
	}


	_createCells()
	{
		let table = document.getElementById(this._tableid);

		let currentcell;

		for(let row = 0; row < this._periodictable.rowcount; row++)
		{
            let newrow = document.createElement('tr');
			table.appendChild(newrow);

			for(let column = 0; column < this._periodictable.columncount; column++)
			{
                let cell = document.createElement('td');

				cell.setAttribute("data-row", row);
				cell.setAttribute("data-column", column);

                newrow.appendChild(cell);

				currentcell = document.querySelector(`[data-row='${row}'][data-column='${column}']`);
				currentcell.classList.add("cell");
			}
		}
	}


	_createColumnHeadings()
	{
		for(let column = 1; column <= 18; column++)
		{
			let currentcell = document.querySelector(`[data-row='0'][data-column='${column}']`);
			currentcell.innerHTML = `${column}<br /><span class="groupname">${this._groupNames[column] || "&nbsp;"}</span>`;
			currentcell.classList.add("headingcell");
		}
	}


	_createRowHeadings()
	{
		for(let row = 1; row <= 7; row++)
		{
			let currentcell = document.querySelector(`[data-row='${row}'][data-column='0']`);
			currentcell.innerHTML = row;
			currentcell.classList.add("headingcell");
		}
	}


    _populate()
    {
		let currentcell = null;
		let tooltip = "";

		for(let element of this._periodictable.data)
		{
			currentcell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);

			currentcell.setAttribute('data-atomicnumber', element.atomicnumber);

			currentcell.innerHTML = `
				${element.name}<br />
				${element.atomicnumber}<br />
				<span class="chemicalsymbol">${element.symbol}</span><br />
				${element.atomicweight}`;

			tooltip = `Nombre: ${element.name}
					N&uacute;mero at&oacute;mico: ${element.atomicnumber}
					S&iacute;bolo qu&iacute;mico: ${element.symbol}
					Categor&iacute;a: ${element.category}
					Peso atat&oacute;mico - convencional: ${element.atomicweight}
					Peso atat&oacute;mico - estandard: ${element.atomicweightfull}
					Occurrencia: ${element.occurrence}
					Estado de la materia: ${element.stateofmatter}
					Grupo: ${element.group}
					Periodo: ${element.period}
					Bloque: ${element.block}`;

			currentcell.setAttribute("title", tooltip.replace(/\t/g, ''));

			currentcell.classList.add("elementcell");
		}

		this.ColorByCategory();
    }


	ColorByCategory()
	{
        for(let element of this._periodictable.data)
		{
			let currentcell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);

			for(let v of Object.values(this._blockClassMappings))
			{
				currentcell.classList.remove(v);
			}

			currentcell.classList.add(this._categoryClassMappings[element.category]);
		}
	}


	ColorByBlock()
	{
        for(let element of this._periodictable.data)
		{
			let currentcell = document.querySelector(`[data-row='${element.tablerow18col}'][data-column='${element.tablecolumn18col}']`);

			for(let v of Object.values(this._categoryClassMappings))
			{
				currentcell.classList.remove(v);
			}

			currentcell.classList.add(this._blockClassMappings[element.block]);
		}
	}
}
